<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function AllCat()
    {
//        $categories = Category::latest()->get();
//        $categories = DB::table('categories')->latest()->get();
//        $categories = DB::table('categories')->latest()->paginate(5);

//        $categories = DB::table('categories')
//            ->join('users', 'categories.user_id', 'users.id')
//            ->select('categories.*', 'users.name')
//            ->latest()
//            ->paginate(5);

        $categories = Category::latest()->paginate(5);
        $trashCategories = Category::onlyTrashed()->latest()->paginate(3);
        return view('admin.category.index', compact('categories', 'trashCategories'));
    }

    public function AddCat(Request $request)
    {
        $validated = $request->validate(
            [
                'category_name' => 'required|unique:categories|max:255',
            ],
            [
                'category_name.required' => 'Please Input Category Name',
                'category_name.max' => 'Category Name Should Be Less Than 255 Chars',
            ]
        );

        /*Category::insert([
            'category_name' => $request->category_name,
            'user_id' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        $data = array();
        $data['category_name'] = $request->category_name;
        $data['user_id'] = Auth::user()->id;
        DB::table('categories')->insert($data);*/

        $category = new Category;
        $category->category_name = $request->category_name;
        $category->user_id = Auth::user()->id;
        $category->save();

        return Redirect()->back()->with('success', 'Category Inserted Successfully');

    }

    public function EditCat($id)
    {
//        $category = Category::find($id);
        $category = DB::table('categories')->where('id', $id)->first();
        return view('admin.category.edit', compact('category'));
    }

    public function UpdateCat(Request $request, $id)
    {
        /*$category = Category::find($id)->update([
            'category_name' => $request->category_name,
            'user_id' => Auth::user()->id,
        ]);*/

        $data = array();
        $data['category_name'] = $request->category_name;
        $data['user_id'] = Auth::user()->id;
        DB::table('categories')->where('id', $id)->update($data);

        return Redirect()->route('all.category')->with('success', 'Category Updated Successfully');
    }

    public function SoftDeleteCat($id)
    {
        $category = Category::find($id)->delete();

        return Redirect()->back()->with('success', 'Category Soft Delete Successfully');
    }

    public function RestoreCat($id)
    {
        $category = Category::withTrashed($id)->find($id)->restore();

        return Redirect()->back()->with('success', 'Category Restored Successfully');
    }

    public function PermanentDeleteCat($id)
    {
        $category = Category::onlyTrashed()->find($id)->forceDelete();

        return Redirect()->back()->with('success', 'Category Permanently Deleted Successfully');
    }

}
