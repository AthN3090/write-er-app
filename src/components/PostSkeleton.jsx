function PostSkeleton() {
  return (
    <div>
      <hr></hr>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-">
          <div className="h-[20px] w-[20px] bg-gray-300 rounded-full text-neutral-300 animate-pulse"></div>
          <div className="w-[200px] bg-gray-300 text-xs animate-pulse">
            &nbsp;
            {/* <span >Author</span> .{" "}
            <span className="text-xs text-gray-500">
              29-06-1999 01:00
            </span> */}
          </div>
        </div>
        <div className="flex gap-5 my-1">
          <div className="w-3/4">
            <p className="text-2xl my-1 bg-gray-300 font-bold animate-pulse">&nbsp;</p>
                <p className="text-xs text-gray-800 mt-3 bg-gray-300 animate-pulse overflow-hidden text-ellipsis line-clamp-3">
                &nbsp;
                </p>
                <p className="text-xs text-gray-800 mt-1 bg-gray-300 animate-pulse overflow-hidden text-ellipsis line-clamp-3">
                &nbsp;
                </p>
                <p className="text-xs text-gray-800 mt-1 bg-gray-300 animate-pulse overflow-hidden text-ellipsis line-clamp-3">
                &nbsp;
                </p>
          </div>
          <div className="flex grow items-center justify-center ">
            <div className="md:w-[240px] w-[160px] h-[130px] bg-gray-300 animate-pulse" ></div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default PostSkeleton;
