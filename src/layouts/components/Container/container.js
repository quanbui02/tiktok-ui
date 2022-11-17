import classNames from 'classnames/bind';
import styles from './container.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FaComment, FaShare } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import { useElementOnScreen } from '~/pages/Home';
const cx = classNames.bind(styles);
function Container({ data }) {
  const videoRef = useRef();
  const [isplaying, setisPlaying] = useState(false);
  const handleClickVideo = () => {
    if (isplaying) {
      videoRef.current.pause();
      setisPlaying(false);
    } else {
      videoRef.current.play();
      setisPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisibile) {
      if (!isplaying) {
        videoRef.current.play();
        setisPlaying(true);
      }
    } else {
      if (isplaying) {
        videoRef.current.pause();
        setisPlaying(false);
      }
    }
  }, [isVisibile]);
  return (
    <div className={cx('main_container')}>
      <div className={cx('list-item-container')}>
        <a href="/Profile" className={cx('avata-anchor')}>
          <div className={cx('Div-container')}>
            <img className={cx('img-avatar')} src={data.avatar} />
          </div>
        </a>
        <div className={cx('Div_content-container')}>
          <div className={cx('Div_textInfo-container')}>
            <div className={cx('info')}>
              <div className={cx('nickname')}>{data.nickName}</div>
              <div className={cx('fullname')}>{data.fullName}</div>
            </div>
            <Button className={cx('btn-follow')} outline small>
              Follow
            </Button>
            <div className={cx('hastag')}>
              <span className={cx('spantext')}>Qua kho de cham 1 nguoi con gai</span>
              <a className={cx('link-hastag')} href="/tag/utnhi_mino_official">
                <strong className={cx('text')}>#utnhi_mino_official </strong>
              </a>
              <a className={cx('link-hastag')} href="/tag/utnhi_mino_official">
                <strong className={cx('text')}>#xuhuong </strong>
              </a>
              <a className={cx('link-hastag')} href="/tag/utnhi_mino_official">
                <strong className={cx('text')}>#utnhi_mino_official </strong>
              </a>
              <a className={cx('link-hastag')} href="/tag/utnhi_mino_official">
                <strong className={cx('text')}>#utnhi_mino_official </strong>
              </a>
            </div>
            <h4 className={cx('link-music')}>
              <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
              <a className={cx('link')}>nhạc nền - Út Nhị Mino</a>
            </h4>
          </div>
          <div className={cx('Div_Video-wrapper')}>
            <div className={cx('videocart')}>
              <video
                controls
                ref={videoRef}
                onClick={handleClickVideo}
                className={cx('videocontent')}
                loop
                src={data.video}
              ></video>
            </div>
            <div className={cx('actionItem')}>
              <button className={cx('btn-item')}>
                <span className={cx('spanIcon')}>
                  <FontAwesomeIcon icon={faHeart} className={cx('iconAction')} />
                </span>
                <strong className={cx('text-line')}>{data.like}</strong>
              </button>
              <button className={cx('btn-item')}>
                <span className={cx('spanIcon')}>
                  <FaComment className={cx('iconAction')} />
                </span>
                <strong className={cx('text-line')}>{data.cmt}</strong>
              </button>
              <button className={cx('btn-item')}>
                <span className={cx('spanIcon')}>
                  <FaShare icon={faHeart} className={cx('iconAction')} />
                </span>
                <strong className={cx('text-line')}>{data.share}</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
