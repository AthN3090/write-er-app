import TopicLabel from "../components/TopicLabel";
import { topics } from "../data/topics";
function RecTopics() {
    return (
      <div className="px-5 py-2 bg-gray-100">
        <p className="text-lg font-medium mb-4">Recommended topics</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((item, index) => (
            <TopicLabel text={item} key={index}/>
          ))}
        </div>
      </div>
    );
}

export default RecTopics;