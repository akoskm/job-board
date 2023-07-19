import getJobs, {getJob} from "@/services";

export async function generateStaticParams() {
  const jobs = await getJobs();

  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function JobPage({ params: { id } }: { params : { id: string}}) {
  const job = await getJob(id);

  if (!job) return (<div>Job {id} doesn’t exist</div>);

  return (
    <div>
      <h1>{job.get('Name') as string}</h1>
      <p>{job.get('Description') as string}</p>
    </div>
  )
}