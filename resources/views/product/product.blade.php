@extends('layouts.app')

@section('headSection')
    <link rel="stylesheet" href="{{ asset('admin/bower_components/select2/dist/css/select2.min.css') }}">
@endsection()

    @section('content')

        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    Create Product
                </h1>
            </section>

            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-md-12">

                        <!-- general form elements -->
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">Product</h3>
                            </div>

                            @if (count($errors) > 0)
                                @foreach ($errors->all() as $error)
                                    <p class="alert alert-danger">{{ $error }}</p>
                                @endforeach
                            @endif

                            @if(session()->has('message'))
                                <p class="alert alert-success">{{ session('message') }}</p>
                            @endif

                            {{-- Form start --}}
                            <form role="form" action="{{ route('product.store') }}" method="post" enctype="multipart/form-data">
                                {{ csrf_field() }}

                                <div class="box-body">
                                    <div class="col-lg-6">

                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Enter name" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="price">Price</label>
                                            <input type="text" name="price" class="form-control" id="price" placeholder="Price $" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="screen">Main Screen</label>
                                            <input type="text" name="screen" class="form-control" id="screen" placeholder="screen" required>
                                        </div>

                                    </div>

                                    <div class="col-lg-6">

                                        <div class="form-group">
                                            <label for="ram">RAM</label>
                                            <input type="text" name="ram" class="form-control" id="ram" placeholder="ram" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="camera">Camera</label>
                                            <input type="text" name="camera" class="form-control" id="camera" placeholder="camera" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="cpu">CPU</label>
                                            <input type="text" name="cpu" class="form-control" id="cpu" placeholder="cpu" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="image">File input</label>
                                            <input type="file" id="image" name="image">
                                        </div>
                                    </div>

                                </div>

                                <div class="box-footer">
                                    <button type="submit" class="btn btn-primary">Submit</button>

                                    <a href="{{ route('home') }}" class="btn btn-default">Go back</a>
                                </div>

                            </form>
                        {{-- /form--}}
                        </div>

                    </div>
                    <!-- /.col-->
                </div>
                <!-- ./row -->
            </section>
            <!-- /.content -->
        </div>

    @endsection

@section('footerSection')

    <!-- CK Editor -->
    <script src="{{ asset('admin/bower_components/ckeditor/ckeditor.js') }}"></script>
    {{--<script src="{{ asset('admin/ckeditor/ckeditor.js') }}"></script>--}}
    <script>
        $(function () {
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            CKEDITOR.replace('editor1')
            //bootstrap WYSIHTML5 - text editor
            $('.textarea').wysihtml5()
        })
    </script>

    <script src="{{ asset('admin/bower_components/select2/dist/js/select2.full.min.js') }}"></script>

    <script>
        $(document).ready(function () {
            $('.select2').select2();
        });
    </script>

@endsection