<?php

namespace App\Http\Controllers;

use App\Models\ProjectData;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectDataController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $projectData = new ProjectData($data);
        $projectData->save();

        return response()->json(['message' => 'მონაცემები წარმატებით გაიგზავნა'], 201);
    }

    public function show($id): JsonResponse
    {
        $projectData = ProjectData::find($id);

        if (!$projectData) {
            return response()->json(['message' => 'მონაცემები ვერ მოიძებნა'], 404);
        }

        return response()->json($projectData);
    }

    public function index(): JsonResponse
    {
        $projectData = ProjectData::orderBy('created_at', 'desc')->get();

        return response()->json($projectData);
    }

    public function destroy($id): JsonResponse
    {
        $projectData = ProjectData::find($id);

        if (!$projectData) {
            return response()->json(['message' => 'მონაცემები ვერ მოიძებნა'], 404);
        }

        $projectData->delete();

        return response()->json(['message' => 'მონაცემები წაიშალა']);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $projectData = ProjectData::find($id);

        $data = json_decode($request->getContent(), true);
        $projectData->fill($data);
        $projectData->save();

        return response()->json(['message' => 'ფორმა რედაქტირებულია']);
    }
}
