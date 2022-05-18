const VideoPop = ({ video, title }) => {
  return (
    <div className="ytVideo">
      <div className="youtube-video">
        <iframe src={video} title={title} allowFullScreen></iframe>
      </div>
      <div className="overlayblack"></div>
    </div>
  );
};

export default VideoPop;
