<?php

namespace App\Http\Controllers;

use App\Models\ProjectData;
use Illuminate\Http\Request;

class ProjectDataController extends Controller
{
    public function store(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $projectData = new ProjectData($data);
        $projectData->save();

        return response()->json(['message' => 'მონაცემები წარმატებით გაიგზავნა'], 201);
    }

    public function show($id)
    {
        $projectData = ProjectData::find($id);

        if (!$projectData) {
            return response()->json(['message' => 'მონაცემები ვერ მოიძებნა'], 404);
        }

        return response()->json($projectData);
    }

    public function index()
    {
        $projectData = ProjectData::orderBy('created_at', 'desc')->get();

        return response()->json($projectData);
    }

    public function destroy($id)
    {
        $projectData = ProjectData::find($id);

        if (!$projectData) {
            return response()->json(['message' => 'მონაცემები ვერ მოიძებნა'], 404);
        }

        $projectData->delete();

        return response()->json(['message' => 'მონაცემები წაიშალა']);
    }
}
