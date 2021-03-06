<?php

namespace App\Repository;

use App\Model\Role;
use App\Repository\Interfaces\RoleRepositoryInterface;
use App\Repository\Eloquent\Repository;

class RoleRepository extends Repository implements RoleRepositoryInterface
{
    public function model()
    {
        return Role::class;
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
        $role = parent::find($id);

        return $role->perms()->sync($input['relation']);
    }
}
