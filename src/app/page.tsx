import getJobs from "@/services";
import Link from "next/link";


export default async function Page() {
  const jobs = await getJobs();

  if (!jobs) return (
    <div>AI has taken all programming jobs. Check back later!</div>
  );

  return (
    <div>
      <h1 className='text-2xl pt-4'>Jobs</h1>
      <div>
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <div>
              {job.get('Name') as string}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}