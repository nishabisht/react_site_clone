import React from "react";
import "./Welcome.css";
import logo from "../../assets/img/logo192.png";
import Bigbutton from "../BigButton/Bigbutton";
import UperSection from "../Content/UperSection";
import MiddleSection from "../Content/MiddleSection";
import LowerSection from "../Content/LowerSection";
import PlatformSection from "../CustomSection/CustomSection.js";

const Welcome = () => {
  return (
    <div>
      <section className="welcome border-bottom mt-3  padding-5">
        <div className="d-flex justify-content-center">
          <img src={logo} aria-label="logo" className="" id="logo" alt="logo" />
        </div>
        <div className="h1 fs-1 fw-semibold" id="heading">
          React
        </div>
        <div className="h2">The library for web and native user interfaces</div>
        <button type="button" className="btn theme text-white rounded-pill m-2">
          Learn React
        </button>
        <button
          type="button"
          className="btn btn-white text-black border-secondary rounded-pill m-2"
        >
          API Reference
        </button>
      </section>
    </div>
  );
};

const UserInterface = () => {
  const heading = "Create user interfaces from components";
  const text1 =
    "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.";
  const text2 =
    "Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.";

  const code_block = {
    heading: "VideoList.js",
    codeText: ` function Video({ video }) {
            return (
              <div>
                <Thumbnail video={video} />
                <a href={video.url}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </a>
                <LikeButton video={video} />
              </div>
            );
          }
        `,
  };

  const vcardData = [
    {
      name: "My video",
      description: "Video description",
    },
  ];

  const vHeading = "";

  return (
    <>
      <section
        className="userInterface border-bottom bg-theme-left p-3"
        id="user-interface"
      >
        <UperSection heading={heading} text1={text1} />
        <MiddleSection
          vcardData={vcardData}
          vHeading={vHeading}
          code_block={code_block}
        />
        <LowerSection text2={text2} />
      </section>
    </>
  );
};

const CodeSection = () => {
  const heading = "Write components with code and markup";
  const text1 =
    "React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.";
  const text2 =
    "This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.";

  const code_block = {
    heading: "VideoList.js",
    codeText: `   function VideoList({ videos, emptyHeading }) {
      const count = videos.length;
      let heading = emptyHeading;
        if (count > 0) {
          const noun = count > 1 ? 'Videos' : 'Video';
          heading = count + ' ' + noun;
        }
        return (
          <section>
            <h2>{heading}</h2>
            {videos.map(video =>
              <Video key={video.id} video={video} />
            )}
          </section>
        );
      }
            `,
  };

  const vcardData = [
    { name: "First video", description: "Video description" },
    { name: "Second video", description: "Video description" },
    { name: "Third video", description: "Video description" },
  ];

  const vHeading = "3 Video";
  return (
    <>
      <section
        className="userInterface border-bottom bg-theme-left p-3"
        id="user-interface"
      >
        <UperSection heading={heading} text1={text1} />
        <MiddleSection
          vcardData={vcardData}
          vHeading={vHeading}
          code_block={code_block}
        />
        <LowerSection text2={text2} />
      </section>
    </>
  );
};

const Interactivity = () => {
  const heading = "Add interactivity wherever you need it";
  const text1 =
    "React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.";
  const text2 =
    "You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.";

  const code_block = {
    heading: "VideoList.js",
    codeText: `  import { useState } from 'react';
      function SearchableVideoList({ videos }) {
        const [searchText, setSearchText] = useState('');
        const foundVideos = filterVideos(videos, searchText);
        return (
          <>
            <SearchInput
              value={searchText}
              onChange={newText => setSearchText(newText)} />
            <VideoList
              videos={foundVideos}
              emptyHeading={No matches for } />
          </>
        );
      } `,
  };

  const vcardData = [
    {
      name: "React: The Documentary",
      description: "The origin story of React",
    },
    { name: "Rethinking Best Practices", description: "Pete Hunt (2013)" },
    { name: "Introducing React Native", description: "Tom Occhino (2015)" },
    {
      name: "Introducing React Hooks",
      description: "Sophie Alpert and Dan Abramov (2018)",
    },
    {
      name: "Introducing Server Components",
      description: "Dan Abramov and Lauren Tan (2020)",
    },
  ];
  const vHeading = "React Videos";
  const btnText = "</> Add React to your page >";

  return (
    <>
      <section
        className="userInterface border-bottom bg-theme-left p-3"
        id="user-interface"
      >
        <UperSection heading={heading} text1={text1} />
        <MiddleSection
          vcardData={vcardData}
          vHeading={vHeading}
          code_block={code_block}
        />
        <LowerSection text2={text2} />
        <Bigbutton btnText={btnText} />
      </section>
    </>
  );
};

const Framework = () => {
  const heading = "Go full-stack with a framework";
  const text1 =
    "React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.";
  const text2 =
    "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.";

  const code_block = {
    heading: "VideoList.js",
    codeText: `    import { db } from './database.js';
    import { Suspense } from 'react';

    async function ConferencePage({ slug }) {
      const conf = await db.Confs.find({ slug });
      return (
        <ConferenceLayout conf={conf}>
          <Suspense fallback={<TalksLoading />}>
            <Talks confId={conf.id} />
          </Suspense>
        </ConferenceLayout>
      );
    }

    async function Talks({ confId }) {
      const talks = await db.Talks.findAll({ confId });
      const videos = talks.map(talk => talk.video);
      return <SearchableVideoList videos={videos} />;
    }`,
  };

  const vcardData = [
    { name: "React 18 Keynote", description: "The React Team" },
    { name: "React 18 for App Developers", description: "Shruti Kapoor" },
    {
      name: "Streaming Server Rendering with Suspense",
      description: "Shaundai Person",
    },
    { name: "The First React Working Group", description: "Aakansha Doshi" },
    { name: "React Developer Tooling", description: "Brian Vaughn" },
    { name: "React without memo", description: "Xuan Huang" },
    { name: "React Docs Keynote", description: "Rachel Nabors" },
    {
      name: "Things I Learnt from the New React Docs",
      description: "Debbie O'Brien",
    },
    { name: "Learning in the Browser", description: "Sarah Rainsberger" },
    { name: "The ROI of Designing with React", description: "Linton Ye" },
    {
      name: "Interactive Playgrounds with React",
      description: "Delba de Oliveira",
    },
    { name: "Re-introducing Relay", description: "Robert Balicki" },

    {
      name: "React Native Desktop",
      description: "Eric Rozell and Steven Moyes",
    },
    {
      name: "On-device Machine Learning for React Native",
      description: "Roman Radle",
    },
    {
      name: "React 18 for External Store Libraries",
      description: "Daishi Kato",
    },
    {
      name: "Building Accessible Components with React 18",
      description: "Diego Haz",
    },
    {
      name: "Accessible Japanese From Components with React",
      description: "Tafu Nakazaki",
    },
    { name: "UI Tools for Artists", description: "Lyle Troxell" },
    { name: "Hydrogen + React 18", description: "Helen Lin" },
  ];
  const vHeading = "React Conf 2021 ";
  const btnText = "</> Get started with a framework >";

  return (
    <>
      <section
        className="userInterface border-bottom bg-theme-left p-3"
        id="user-interface"
      >
        <UperSection heading={heading} text1={text1} />
        <MiddleSection
          vcardData={vcardData}
          vHeading={vHeading}
          code_block={code_block}
        />
        <LowerSection text2={text2} />
        <Bigbutton btnText={btnText} />
      </section>
    </>
  );
};

const Platform = () => {
  const heading = "Use the best from every platform";
  const text1 =
    "People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.";
  const text2 =
    "With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.";

  const code_block = {
    heading: "example.com",
    codeText: `    Stay true to the web  People expect web app pages to load fast. 
    On the server, React lets you start streaming HTML while 
    you’re still fetching data, progressively filling in the
    remaining content before any JavaScript code loads.
    On the client, React can use standard web APIs to keep
    your UI responsive even in the middle of rendering.`,
  };
  const code_block1 = {
    heading: "example.com",
    codeText: `   Go truly native People expect native apps to look and feel like their
    platform. React Native and Expo let you build apps
    in React for Android, iOS, and more. They look and
    feel native because their UIs are truly native. It’s not
    a web view—your React components render real
    Android and iOS views provided by the platform.`,
  };
  const btnText = "</> Build for native platforms >";

  return (
    <>
      <section
        className="userInterface border-bottom bg-theme-left p-3"
        id="user-interface"
      >
        <UperSection heading={heading} text1={text1} />
        <PlatformSection code_block={code_block} code_block1={code_block1} />
        <LowerSection text2={text2} />
        <Bigbutton btnText={btnText} />
      </section>
    </>
  );
};

const ReactCommunity = () => {
  return (
    <div>
      <section className="welcome m-2 py-5">
        <div className="d-flex justify-content-center p-2">
          <img src={logo} aria-label="logo" className="" id="logo" alt="logo" />
        </div>
        <div className="h1 fs-1 fw-semibold " id="heading">
          Welcome to the React community
        </div>
        <button type="button" className="btn theme text-white rounded-pill">
          Get Started
        </button>
      </section>
    </div>
  );
};

export {
  Welcome,
  UserInterface,
  ReactCommunity,
  Interactivity,
  Framework,
  Platform,
  CodeSection,
};
