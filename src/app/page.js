import { createClient } from "@/utils/supabase/client";

export default async function Page() {
  const supabase = await createClient();
  const { data: project, error } = await supabase.from("portfolio").select();
  console.log(project);
  if (error) {
    console.error("연결 실패", error);
    return <div>프로젝트 로드 실패</div>;
  }
  return;
}
