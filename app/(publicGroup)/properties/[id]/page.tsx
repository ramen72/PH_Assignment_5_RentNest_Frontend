const page = () => {
  const params = new URLSearchParams();
  console.log(params.get("searchTerm"));
  //   if (query && query.searchTerm) {
  //     params.set("searchTerm", query.searchTerm as string);
  //   }

  return (
    <div>
      <h1>Single property</h1>
    </div>
  );
};

export default page;
