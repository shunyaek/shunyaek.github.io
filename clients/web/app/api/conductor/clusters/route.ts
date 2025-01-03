import { NextResponse } from 'next/server';
import { ClusterManager } from "@/lib/types";

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parser to handle file uploads
  },
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    if (!name) {
      return NextResponse.json({ error: "Missing required field: name" }, { status: 400 });
    }
    const kubernetesConfigurationFile = formData.get("kubernetesConfigurationFile") as File;
    if (!kubernetesConfigurationFile) {
      return NextResponse.json({ error: "Missing required file: Kubernetes configuration" }, { status: 400 });
    }
    const kubernetesConfiguration = await kubernetesConfigurationFile.text();
    const id = ClusterManager.createCluster(name, kubernetesConfiguration);
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  const clusters = ClusterManager.readClusters();
  return NextResponse.json({ clusters }, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const success = ClusterManager.createActiveCluster(id);

  if (!success) {
    return NextResponse.json({ error: "Cluster not found!" }, { status: 404 });
  }

  return NextResponse.json({ message: "Active cluster set!" }, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const success = ClusterManager.deleteCluster(id);

  if (!success) {
    return NextResponse.json({ error: "Cluster not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Cluster deleted" });
}
