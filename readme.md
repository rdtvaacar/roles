# roles

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Installation

 #### Via Composer

``` bash
$ composer require acr/roles
```
##### Php Artisan
```bash
$ php artisan vendor:publish --provider="acr\roles\rolesServiceProvider"
```
```bash
$ php artisan migrate
```
```bash
$ php artisan make:model Role
```
##### Insert Models User.php
```php
function roles() {
   return $this->belongsToMany('App\Role');
}
```
##### controller.php
```php
$acrRolesFilesPathJs = "/vendor/acr/roles/static/js";
$acrRolesFilesPathCss = "/vendor/acr/roles/static/css";
$scannedDirectoryJs = array_diff(scandir($acrRolesFilesPathJs), array('..', '.'));
$scannedDirectoryCss = array_diff(scandir($acrRolesFilesPathCss), array('..', '.'));
```
##### layout.blade.php
```html
<html>
    <head>
        <!-- push target to head -->
        @stack('styles')
        @stack('scripts')
    </head>
    <body>
        <!-- or push target to footer -->
        @stack('scripts')
    </body>
</html>
```
##### view.blade.php
```html
@push('styles')
   @foreach($scannedDirectoryCss as $file) 
      <link href="{{"/$file"}}" rel="stylesheet">
   @endforeach
@endpush
@push('scripts')
    @foreach($scannedDirectoryJs as $file) 
      <script type="text/javascript" src="{{ "/$file" }}"></script>
    @endforeach
@endpush
```
## Usage
#### Your link of user page and add roles
```html
 #/acr/roles/user/{{$user_id}}
```

## Testing

``` bash
$ composer test
```
## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [author name][link-author]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/rdtvaacar/roles.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/rdtvaacar/roles.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/rdtvaacar/roles/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/rdtvaacar/roles
[link-downloads]: https://packagist.org/packages/rdtvaacar/roles
[link-travis]: https://travis-ci.org/rdtvaacar/roles
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/rdtvaacar
[link-contributors]: ../../contributors
