<?php

namespace acr\roles\Facades;

use Illuminate\Support\Facades\Facade;

class roles extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'roles';
    }
}
