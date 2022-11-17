import classNames from 'classnames/bind';
import Container from '~/layouts/components/Container/container';
import style from './Home.module.scss';
import { useEffect, useState, useMemo } from 'react';
import db from '~/firebase';
const cx = classNames.bind(style);
function Home() {
  const [videoContent, setVideoContent] = useState([]);
  useEffect(() => {
    db.collection('videos')
      .get()
      .then((querySnapshot) => {
        let Items = [];
        Items = querySnapshot.docs.map((doc) => doc.data());
        setVideoContent(Items);
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      {videoContent.length > 0 &&
        videoContent.map((video) => {
          console.log(video);
          return <Container key={video.id} data={video} />;
        })}
    </div>
  );
}

export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default Home;
