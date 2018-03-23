<?php

namespace App\Repository;

use App\Model\User;
use App\Repository\Interfaces\UserRepositoryInterface;
use App\Repository\Eloquent\Repository;

class UserRepository extends Repository implements UserRepositoryInterface
{
    public function model()
    {
        return User::class;
    }

    /**
     * 关联.
     *
     * @method relation
     *
     * @param array $input [description]
     * @param int   $id    [description]
     *
     * @return [type] [description]
     *                author
     */
    public function relation(array $input, int $id)
    {
        $user = parent::find($id);

        return $user->roles()->sync($input['relation']);
    }
}