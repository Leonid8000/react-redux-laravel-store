@extends('layouts.app')

@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>Products</h1>
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i class="fa fa-minus"></i></button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                            <i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Product Name</th>
                            <th>Screen</th>
                            <th>RAM</th>
                            <th>Camera</th>
                            <th>Cpu</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($products as $product)

                            <tr>
                                <td>{{ $loop->index +1 }}</td>
                                <td>{{ $product->name }}</td>
                                <td>{{ $product->screen }}</td>
                                <td>{{ $product->ram }}</td>
                                <td>{{ $product->camera }}</td>
                                <td>{{ $product->cpu }}</td>
                                <td>{{ $product->price }}</td>
                                <td><a href="{{ route('product.edit', $product->id) }}"><span class="glyphicon glyphicon-edit"></span></a></td>
                                <td>
                                <form id="delete-form-{{ $product->id }}" method="post" action="{{ route('product.destroy',$product->id) }}" style="display: none">
                                    {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                </form>
                                    <a href="" onclick="
                                            if(confirm('Delete?')){
                                            event.preventDefault();
                                            document.getElementById('delete-form-{{ $product->id }}').submit();
                                            }else{
                                            event.preventDefault();
                                            }">
                                        <span class="glyphicon glyphicon-trash"></span>
                                    </a>
                                </td>

                            </tr>

                        @endforeach
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>S.No.</th>
                            <th>Product Name</th>
                            <th>Screen</th>
                            <th>RAM</th>
                            <th>Camera</th>
                            <th>Cpu</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                    Footer
                </div>
                <!-- /.box-footer-->
            </div>
            <!-- /.box -->

        </section>
        <!-- /.content -->
    </div>

@endsection
