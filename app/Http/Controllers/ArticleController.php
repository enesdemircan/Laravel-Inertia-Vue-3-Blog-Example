<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Requests\ArticleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use App\Models\Article;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $my_articles = Article::where('user_id', Auth::getUser()->id)->orderBy('created_at', 'desc')->get();
        return Inertia::render('ArticleList', compact('my_articles'));
    }

    public function landingPage()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        $canLogin = Route::has('login');
        $canRegister = Route::has('register');
        return Inertia::render('Welcome', compact('articles', 'canLogin', 'canRegister'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ArticleCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        try {
            $request->request->add(['user_id' => Auth::getUser()->id]);
            $request->request->add(['slug' => Str::slug($request->title, '-').'-'.rand(11111,99999)]);
            $imageName = time() . '.' . request()->image->getClientOriginalExtension();
            request()->image->move(public_path('images'), $imageName);
            $request = $request->all();
            $request['image'] = '/images/' . $imageName;
            $article = Article::create($request);
            ($article) ? $message = "Added!" : $message = "Could not be added!";

            return redirect()->route('article.create')->with('message', $message);
        } catch (Exception $e) {
            return redirect()->route('article.create')->with('message', $e->getMessage());
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $article = Article::where('slug', $slug)->with('comments.user')->firstOrFail();
        $comments = $article->comments;
        $canLogin = Route::has('login');
        $canRegister = Route::has('register');

        return Inertia::render('ArticleDetail', compact('article','comments', 'canLogin', 'canRegister'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $singleArticle = Article::where('id',$id)->firstOrFail();
        return Inertia::render('ArticleEdit',compact('singleArticle'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {

            $request->validate([
                'title' => 'required|string|unique:blogs,title,'.$id,
                'desc' => 'required|string|max:160',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'article' =>  'required|string',
                'keywords' =>  'required|string'
            ]);

            $article = Article::find($id);
            if (!empty($request->image)){
                $imageName = time() . '.' . request()->image->getClientOriginalExtension();
                request()->image->move(public_path('images'), $imageName);
                $article->image = '/images/' . $imageName;
            }
            $article->title = $request->title;
            $article->slug = Str::slug($request->title).'-'.rand(11111,99999);
            $article->article = $request->article;
            $article->desc = $request->desc;
            $article->keywords = $request->keywords;
            $article->save();
            ($article) ? $message = "Update!" : $message = "Not Update!";

            return redirect()->route('article.edit',$id)->with('message', $message);
        } catch (Exception $e) {
            return redirect()->route('article.edit',$id)->with('message', $e->getMessage());
        }




    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $delete = Article::find($id);
        $delete->delete();
    }
}
