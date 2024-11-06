const WatchVideo = ({
    id,title
  }: {
    id: string;
    title: string;
  }) => {
  return (
    <div className="p-6">
      {/* <h2 className="text-3xl font-bold my-4">Watch Video</h2> */}
      <div className="flex justify-center">
        <iframe
        className="shadow-lg border-2 rounded-lg"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/"+id}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchVideo;
