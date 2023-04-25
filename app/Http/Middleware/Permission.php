<?php

namespace App\Http\Middleware;

use App\Models\Article;
use App\Models\Team;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Permission as PermissionGroup;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $permission = PermissionGroup::where('id', Auth::user()->auth_type)->firstOrFail();

        if (in_array($request->route()->getName(), $permission->routes)) {
            if ($request->route()->getName() == "article.destroy") {
                $control = Article::where('user_id', Auth::user()->id)->count();
                if ($control > 0) {
                    return $next($request);
                }
            }

            //$guard = $request->is('api/*') ? 'api' : 'web';

            return response()->json(array(
                'code' => 405,
                'message' => 'unauthorized'
            ), 405);


        }


        return $next($request);
    }
}
