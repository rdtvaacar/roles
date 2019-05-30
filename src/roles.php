<?php

namespace acr\roles;

use acr\roles\models\RoleUser;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class roles
{
    function destroy(Request $request)
    {
        $mRoles = new Role();
        $id     = $request->id;
        $mRoles->where('id', $id)->delete();
        return $this->index($request);
    }

    function index(Request $request)
    {
        $mRoles = new Role();
        $id     = $request->id;
        if (empty($id)) {
            return $mRoles->get();
        } else {
            return $mRoles->find($id);
        }
    }

    function new(Request $request)
    {
        $mRoles = new Role();
        $id     = $request->id;
        $data   = [
            'name' => $request->name
        ];
        if (empty($id)) {
            $mRoles->insert($data);
        } else {
            $mRoles->where('id', $id)->update($data);
        }
        return $mRoles->get();
    }

    function users(Request $request)
    {
        $id      = $request->id;
        $model   = new User();
        $user    = $model->where('id', $id)->with(['roles'])->first();
        $mRoles  = new Role();
        $roles   = $mRoles->get();
        $myRoles = [];
        if (!empty($user->roles)) {
            foreach ($user->roles as $role) {
                $myRoles[$user->id][] = $role->id;
            }
        }

        return [$user, $roles, $myRoles];
    }

    function update(Request $request)
    {
        $model = new RoleUser();
        $count = $model->where('user_id', $request->user_id)->where('role_id', $request->role_id)->count();
        if ($count < 1) {
            $data = ['user_id' => $request->user_id, 'role_id' => $request->role_id];
            $model->insert($data);
        } else {
            $model->where('user_id', $request->user_id)->where('role_id', $request->role_id)->delete();
        }

        $mUser   = new User();
        $users   = $mUser->with(['roles'])->get();
        $myRoles = [];
        foreach ($users as $user) {
            foreach ($user->roles as $role) {
                $myRoles[$user->id][] = $role->id;
            }
        }
        return $myRoles;
    }
}