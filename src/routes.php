<?php Route::get('/acr/roles', function () {
    return view('vendor.acr.index');
});
Route::get('/acr/roles/users', 'roles@users');
Route::get('/acr/roles/index', 'roles@index');
Route::get('/acr/roles/index/{id}', 'roles@index');
Route::delete('/acr/roles/index/{id}', 'roles@destroy');
Route::post('/acr/roles/update', 'roles@update');
Route::post('/acr/roles/new', 'roles@new');
