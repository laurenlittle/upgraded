const INITIAL_STATE = [
  {
    id: "5d51e61b-d9e0-4cbf-b259-43c841275ead",
    type: "Full Time",
    url: "https://jobs.github.com/positions/5d51e61b-d9e0-4cbf-b259-43c841275ead",
    created_at: "Mon Mar 29 14:02:24 UTC 2021",
    company: "Request",
    company_url: "https://request.network/en",
    location: "Remote",
    title: "Full-stack Engineer",
    description: "<p>At Request, our mission is to interconnect isolated financial systems</p>",
    how_to_apply: "<p><a href='https://request-network.homerun.co/full-stack-engineer/en/apply?&amp;step=1'>https://request-network.homerun.co/full-stack-engineer/en/apply?&amp;step=1</a></p> ",
    company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcCtlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5e035fc28a3086c2c5eb9f029d6f25cd98bd1d4a/Capture%20d%E2%80%99%C3%A9cran%202019-03-06%20%C3%A0%2014.51.53.png"
  },
  {
    id: "83730041-7cfb-41c7-a00e-d154e478e07a",
    type: "Part Time",
    url: "https://jobs.github.com/positions/83730041-7cfb-41c7-a00e-d154e478e07a",
    created_at: "Mon Mar 29 13:48:20 UTC 2021",
    company: "PGGM",
    company_url: null,
    location: "Zeist",
    title: "Senior Low code (Outsystems) Developer",
    description: "<p>Hi! We are verkstedt. 👋</p> <p>We are a team of software developers, located in the heart of Berlin Mitte.</p> <p>We are passionate about delivering high quality web applications with a strong focus on performance, scalability and robust solutions that don’t bother us during a nice board game session on a Saturday night.</p> <p>We are looking for a DevOps Engineer to join our team.</p>",
    how_to_apply: "<p><a href='https://verkstedt.join.com/jobs/2054861-junior-devops-engineer-f-m-x?pid=357a3b4531918760973f&amp;oid=7cebefc6-0553-4199-9188-53c5f0816f6d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=junior%2Bdevops%2Bengineer%2Bf%2Bm%2Bx'>https://verkstedt.join.com/jobs/2054861-junior-devops-engineer-f-m-x?pid=357a3b4531918760973f&amp;oid=7cebefc6-0553-4199-9188-53c5f0816f6d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=junior%2Bdevops%2Bengineer%2Bf%2Bm%2Bx</a></p> ",
    company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGVlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--41e3b421681b09e96c8450eeffc6757cf600367b/Logo-verkstedt-292x300.png"
  },
];


function jobsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default : return state;
  }
}

export default jobsReducer;