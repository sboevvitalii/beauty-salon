export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex items-center justify-center">
        <div className="loader">
          <div className="ball ball1" />
          <div className="ball ball2" />
        </div>

        <style jsx>{`
          .loader {
            width: 50px;
            height: 50px;
            animation: rotate 1s infinite;
          }

          .ball {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }

          .ball1 {
            background: #fff;
            margin-bottom: 10px;
            animation: ball1 1s infinite;
            box-shadow: 30px 0 0 #689d0c;
          }

          .ball2 {
            background: #689d0c;
            animation: ball2 1s infinite;
            box-shadow: 30px 0 0 #fff;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg) scale(0.8);
            }
            50% {
              transform: rotate(360deg) scale(1.2);
            }
            100% {
              transform: rotate(720deg) scale(0.8);
            }
          }

          @keyframes ball1 {
            0% {
              box-shadow: 30px 0 0 #689d0c;
            }
            50% {
              box-shadow: 0 0 0 #689d0c;
              margin-bottom: 0;
              transform: translate(15px, 15px);
            }
            100% {
              box-shadow: 30px 0 0 #689d0c;
              margin-bottom: 10px;
            }
          }

          @keyframes ball2 {
            0% {
              box-shadow: 30px 0 0 #fff;
            }
            50% {
              box-shadow: 0 0 0 #fff;
              margin-top: -20px;
              transform: translate(15px, 15px);
            }
            100% {
              box-shadow: 30px 0 0 #fff;
              margin-top: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
