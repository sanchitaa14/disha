// ParentComponent.js
import React from 'react';
import Card from '../Card/Card';

const GuideData = [
  {
    "name":"ravi",
    "number":"8790653428",
    "time":"english",
    "description":"I am a localite and live near read fort I like to learn new languages and to comunicate with people",
    "img":"https://toptravelpost.com/wp-content/uploads/2021/06/Travel-Guide-842x405.jpg",
    "options":{"hourly":300,
    "daily":2500,
    }
},

{ 
"name":"mohit",
"number":"8790653456",
"time":"hindi",
"description":"Mera naam mohit hai mujhe logo se milna unse baatein kerna bada accha lagta hai mai isliye ek guide banna chahata hun.",
"img":"https://www.danflyingsolo.com/wp-content/uploads/2016/10/INDIAGUIDE2.jpg",
"options":{"hourly":300,
"daily":2000,

}
},
{ "name":"Raju",
"number":"8795677456",
"time":"Italian",
"description":"A very enthusiastic and knowledgeable person,possess great knowledge of nearby localitiees amd knows Italian",
"img":"https://th.bing.com/th/id/OIP.gLpiOP7Nmkew1j5sWMHvsAHaEy?rs=1&pid=ImgDetMain",
"options":{"hourly":300,
"daily":3000,

}
},
{ "name":"manoj",
"number":"9815677456",
"time":"French",
"description":"A very enthusiastic and knowledgeable person,possess great knowledge of nearby localitiees amd knows French",
"img":"https://cdn.getyourguide.com/img/tour/5a951e4b177d2.jpeg/146.jpg",
"options":{"hourly":300,
"daily":3000,

}
},
{ "name":"Faizan",
"number":"8879654320",
"time":"Chinese",
"description":"A very enthusiastic and knowledgeable person,possess great knowledge of nearby localitiees amd knows Chinese",
"img":"https://images.indianexpress.com/2020/10/guides-1200.jpg",
"options":{"hourly":300,
"daily":4000,

}
},
{ "name":"Japanese",
"number":"8798977456",
"time":"Japanese",
"description":"A very enthusiastic and knowledgeable person,possess great knowledge of nearby localitiees amd knows Italian",
"img":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/Coronavirus_India_Taj_Mahal_PT.jpeg",
"options":{"hourly":300,
"daily":4000,

}
},
{ "name":"sumit",
"number":"9645677450",
"time":"hindi",
"description":"mujhe padhne ka bohot shauk hai mai bachpan se hi padhayi mein accha raha hun mujhe naye logo se milne ka bhi bohot shaunk hai.",
"img":"https://images.hindustantimes.com/img/2021/06/08/1600x900/521db4da-c837-11eb-892f-f838ed9ca66a_1623142842160.jpg",
"options":{"hourly":300,
"daily":1500,

}
},
{ "name":"tejendar",
"number":"8795677456",
"time":"German",
"description":"I visited germany in my childhood so I became interested in german language so I learn it and  tried to comunicate with people who know german. ",
"img":"https://th.bing.com/th/id/OIP.gLpiOP7Nmkew1j5sWMHvsAHaEy?rs=1&pid=ImgDetMain",
"options":{"hourly":300,
"daily":3000,

}
},
{ "name":"Irfan",
"number":"8795670056",
"time":"Hindi",
"description":"Mujhe bachpan se hi mughal aultanat ke minare bohot pasand thia ur mai zyada se zyada logog tak bharat ke itihaas ko pohochana chahata hun.",
"img":"https://th.bing.com/th/id/OIP.gYex2sTYclA5NtYrYsu0bwHaEA?rs=1&pid=ImgDetMain",
"options":{"hourly":300,
"daily":1500,

}
},



{ "name":"shubham",
"number":"8795677000",
"time":"English",
"description":"A very enthusiastic and knowledgeable person,possess great knowledge of nearby localitiees amd knows english and also excieted to learn more languages ",
"img":"https://media.istockphoto.com/photos/taj-mahal-tourists-with-guide-picture-id168507706?k=6&m=168507706&s=170667a&w=0&h=pYmaomuEdjE8tgsbn55y1v9l3GphQta4lUO1OeOKWSU=",
"options":{"hourly":300,
"daily":2000,

}
}

];

const Guide = () => {
  return (
    <div>
      {GuideData.map((guide, index) => (
        <Card key={index} guideInfo={guide} />
      ))}
    </div>
  );
};

export default Guide;
