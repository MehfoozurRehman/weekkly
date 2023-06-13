import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mon, tue, wed, thu, fri, sat, sun } from "@assets";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Img from "@modules/Img";

export default function Jumbotron() {
  const days = [
    {
      day: "monday",
      img: mon,
    },
    {
      day: "tuesday",
      img: tue,
    },
    {
      day: "wednesday",
      img: wed,
    },
    {
      day: "thursday",
      img: thu,
    },
    {
      day: "friday",
      img: fri,
    },
    {
      day: "saturday",
      img: sat,
    },
    {
      day: "sunday",
      img: sun,
    },
  ];

  const [currentDay, setCurrentDay] = useState(days[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = days.findIndex((day) => day.day === currentDay.day);
      if (index === days.length - 1) {
        setCurrentDay(days[0]);
      } else {
        setCurrentDay(days[index + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentDay, days]);

  return (
    <div className="container__home__jumbotron">
      <Fade left>
        <div className="container__home__jumbotron__left">
          <svg
            viewBox="0 0 484 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.5219 62.6061V114H51.0029V81.8605L39.8749 114H29.0397L17.8384 81.7873V114H5.31943V62.6061H20.6205L34.6037 98.4061L48.2941 62.6061H63.5219ZM110.969 92.4761C110.969 93.501 110.847 94.6236 110.603 95.8438H82.2701C82.4165 98.9186 83.1974 101.139 84.6129 102.506C86.0283 103.824 87.8341 104.483 90.0304 104.483C91.8851 104.483 93.4225 104.019 94.6427 103.092C95.8629 102.164 96.6682 100.969 97.0587 99.5043H110.31C109.773 102.384 108.602 104.971 106.796 107.265C104.99 109.51 102.696 111.291 99.9139 112.609C97.1319 113.878 94.0326 114.512 90.6161 114.512C86.6139 114.512 83.051 113.683 79.9274 112.023C76.8525 110.315 74.4366 107.875 72.6795 104.702C70.9225 101.53 70.0439 97.8204 70.0439 93.5742C70.0439 89.2792 70.8981 85.5699 72.6063 82.4462C74.3634 79.2737 76.8037 76.8578 79.9274 75.1984C83.051 73.4901 86.6139 72.636 90.6161 72.636C94.6671 72.636 98.23 73.4657 101.305 75.1251C104.38 76.7846 106.747 79.1273 108.406 82.1534C110.115 85.1306 110.969 88.5715 110.969 92.4761ZM98.3032 90.5726C98.352 87.8882 97.6199 85.8871 96.1069 84.5693C94.6427 83.2027 92.8124 82.5194 90.6161 82.5194C88.3222 82.5194 86.4187 83.2027 84.9057 84.5693C83.3927 85.9359 82.5385 87.937 82.3433 90.5726H98.3032ZM133.015 72.636C136.139 72.636 138.823 73.3437 141.069 74.7591C143.314 76.1745 144.973 78.1024 146.047 80.5427V73.1485H158.493V114H146.047V106.606C144.973 109.046 143.314 110.974 141.069 112.389C138.823 113.805 136.139 114.512 133.015 114.512C129.648 114.512 126.622 113.683 123.937 112.023C121.302 110.315 119.203 107.875 117.641 104.702C116.128 101.53 115.372 97.8204 115.372 93.5742C115.372 89.2792 116.128 85.5699 117.641 82.4462C119.203 79.2737 121.302 76.8578 123.937 75.1984C126.622 73.4901 129.648 72.636 133.015 72.636ZM137.042 83.6176C134.358 83.6176 132.186 84.4961 130.526 86.2532C128.916 88.0102 128.11 90.4506 128.11 93.5742C128.11 96.6979 128.916 99.1382 130.526 100.895C132.186 102.652 134.358 103.531 137.042 103.531C139.678 103.531 141.825 102.628 143.485 100.822C145.193 99.0162 146.047 96.6003 146.047 93.5742C146.047 90.4994 145.193 88.0834 143.485 86.3264C141.825 84.5205 139.678 83.6176 137.042 83.6176ZM179.631 59.8241V114H167.112V59.8241H179.631ZM215.45 95.8438V114H202.931V62.2401H223.21C229.36 62.2401 234.045 63.7775 237.267 66.8523C240.488 69.8784 242.099 73.9782 242.099 79.1517C242.099 82.373 241.367 85.2526 239.902 87.7906C238.487 90.2797 236.364 92.2564 233.533 93.7206C230.702 95.1361 227.261 95.8438 223.21 95.8438H215.45ZM221.819 85.8139C226.846 85.8139 229.36 83.5932 229.36 79.1517C229.36 74.6127 226.846 72.3431 221.819 72.3431H215.45V85.8139H221.819ZM260.778 80.8356C262.34 78.3464 264.341 76.3697 266.781 74.9055C269.27 73.4413 271.955 72.7092 274.834 72.7092V86.1067H271.247C267.928 86.1067 265.341 86.8144 263.486 88.2299C261.681 89.6453 260.778 92.0368 260.778 95.4045V114H248.259V73.1485H260.778V80.8356ZM318.875 92.4761C318.875 93.501 318.753 94.6236 318.509 95.8438H290.177C290.323 98.9186 291.104 101.139 292.52 102.506C293.935 103.824 295.741 104.483 297.937 104.483C299.792 104.483 301.329 104.019 302.549 103.092C303.77 102.164 304.575 100.969 304.965 99.5043H318.217C317.68 102.384 316.508 104.971 314.702 107.265C312.897 109.51 310.603 111.291 307.821 112.609C305.039 113.878 301.939 114.512 298.523 114.512C294.521 114.512 290.958 113.683 287.834 112.023C284.759 110.315 282.343 107.875 280.586 104.702C278.829 101.53 277.951 97.8204 277.951 93.5742C277.951 89.2792 278.805 85.5699 280.513 82.4462C282.27 79.2737 284.71 76.8578 287.834 75.1984C290.958 73.4901 294.521 72.636 298.523 72.636C302.574 72.636 306.137 73.4657 309.212 75.1251C312.287 76.7846 314.654 79.1273 316.313 82.1534C318.021 85.1306 318.875 88.5715 318.875 92.4761ZM306.21 90.5726C306.259 87.8882 305.527 85.8871 304.014 84.5693C302.549 83.2027 300.719 82.5194 298.523 82.5194C296.229 82.5194 294.325 83.2027 292.812 84.5693C291.299 85.9359 290.445 87.937 290.25 90.5726H306.21Z"
              fill="#20253A"
            />
            <path
              d="M350.879 72.636C354.247 72.636 357.248 73.4901 359.884 75.1984C362.568 76.8578 364.667 79.2737 366.18 82.4462C367.742 85.5699 368.523 89.2792 368.523 93.5742C368.523 97.8204 367.742 101.53 366.18 104.702C364.667 107.875 362.568 110.315 359.884 112.023C357.248 113.683 354.247 114.512 350.879 114.512C347.755 114.512 345.071 113.805 342.826 112.389C340.581 110.974 338.945 109.046 337.921 106.606V133.474H325.402V73.1485H337.921V80.5427C338.945 78.1024 340.581 76.1745 342.826 74.7591C345.071 73.3437 347.755 72.636 350.879 72.636ZM346.852 83.6176C344.217 83.6176 342.045 84.5205 340.336 86.3264C338.677 88.0834 337.847 90.4994 337.847 93.5742C337.847 96.6003 338.677 99.0162 340.336 100.822C342.045 102.628 344.217 103.531 346.852 103.531C349.537 103.531 351.684 102.652 353.295 100.895C354.954 99.1382 355.784 96.6979 355.784 93.5742C355.784 90.4506 354.954 88.0102 353.295 86.2532C351.684 84.4961 349.537 83.6176 346.852 83.6176Z"
              fill="#3FC344"
            />
            <path
              d="M12.1352 43V28.8353L1.45032 12.5009H5.09384L14.4278 26.7065H13.1178L22.4108 12.5009H26.0543L15.4103 28.8353V43H12.1352ZM35.8565 43.4913C33.7823 43.4913 31.8991 43 30.207 42.0175C28.5148 41.0077 27.1639 39.6431 26.1541 37.9236C25.1715 36.1769 24.6803 34.1983 24.6803 31.9876C24.6803 29.8042 25.1715 27.8528 26.1541 26.1334C27.1366 24.414 28.4603 23.063 30.1251 22.0805C31.8172 21.0707 33.7277 20.5658 35.8565 20.5658C37.9853 20.5658 39.8821 21.057 41.5469 22.0396C43.239 23.0221 44.5627 24.373 45.5179 26.0925C46.5004 27.8119 46.9917 29.7769 46.9917 31.9876C46.9917 34.2255 46.4868 36.2179 45.477 37.9646C44.4672 39.684 43.1162 41.035 41.4241 42.0175C39.7593 43 37.9034 43.4913 35.8565 43.4913ZM35.8565 40.4209C37.3302 40.4209 38.6539 40.0524 39.8275 39.3155C41.0283 38.5787 41.9699 37.5688 42.6522 36.2861C43.3618 35.0034 43.7166 33.5705 43.7166 31.9876C43.7166 30.4046 43.3618 28.9854 42.6522 27.73C41.9699 26.4745 41.0283 25.4784 39.8275 24.7415C38.6539 24.0046 37.3302 23.6362 35.8565 23.6362C34.3827 23.6362 33.0454 24.0046 31.8445 24.7415C30.6709 25.4784 29.7294 26.4745 29.0198 27.73C28.3102 28.9854 27.9554 30.4046 27.9554 31.9876C27.9554 33.5705 28.3102 35.0034 29.0198 36.2861C29.7294 37.5688 30.6709 38.5787 31.8445 39.3155C33.0454 40.0524 34.3827 40.4209 35.8565 40.4209ZM60.185 43.4913C58.6567 43.4913 57.2648 43.1365 56.0093 42.4269C54.7539 41.69 53.7577 40.6802 53.0208 39.3974C52.3112 38.0874 51.9564 36.5863 51.9564 34.8942V21.057H55.0268V34.5258C55.0268 35.6993 55.2588 36.7364 55.7228 37.6371C56.214 38.5104 56.8827 39.1927 57.7287 39.684C58.6021 40.1753 59.5983 40.4209 60.7172 40.4209C61.8362 40.4209 62.8324 40.1753 63.7057 39.684C64.5791 39.1654 65.2614 38.4422 65.7527 37.5143C66.2439 36.559 66.4896 35.4264 66.4896 34.1164V21.057H69.5599V43H66.4896V38.7424L67.1855 38.9062C66.667 40.3254 65.78 41.4443 64.5245 42.2631C63.2691 43.0819 61.8226 43.4913 60.185 43.4913ZM75.8744 43V21.057H78.9447V24.6596L78.5353 24.1274C79.0539 23.0903 79.8317 22.2715 80.8688 21.6711C81.9332 21.0707 83.216 20.7705 84.717 20.7705H86.1089V23.8408H84.1848C82.6019 23.8408 81.3328 24.3321 80.3776 25.3146C79.4223 26.2971 78.9447 27.6891 78.9447 29.4903V43H75.8744ZM97.1137 43V12.5009H99.9794L111.442 29.1219H109.846L121.267 12.5009H124.133V43H120.858V16.9223L121.922 17.3316L110.705 33.5842H110.541L99.3653 17.3316L100.389 16.9223V43H97.1137ZM140.874 43.4913C138.827 43.4913 136.971 43 135.307 42.0175C133.669 41.0077 132.373 39.6294 131.417 37.8827C130.462 36.136 129.985 34.1573 129.985 31.9466C129.985 29.736 130.449 27.7846 131.377 26.0925C132.304 24.373 133.56 23.0221 135.143 22.0396C136.753 21.057 138.554 20.5658 140.547 20.5658C142.13 20.5658 143.535 20.866 144.763 21.4664C146.019 22.0396 147.083 22.831 147.957 23.8408C148.83 24.8234 149.499 25.9423 149.963 27.1978C150.427 28.4259 150.659 29.695 150.659 31.0051C150.659 31.278 150.645 31.5918 150.618 31.9466C150.59 32.2741 150.549 32.6153 150.495 32.9701H131.95V30.1044H148.734L147.261 31.3326C147.506 29.8315 147.329 28.4942 146.728 27.3206C146.155 26.1197 145.323 25.1782 144.231 24.4959C143.139 23.7863 141.911 23.4315 140.547 23.4315C139.182 23.4315 137.913 23.7863 136.739 24.4959C135.593 25.2055 134.693 26.2016 134.038 27.4844C133.383 28.7398 133.123 30.2409 133.26 31.9876C133.123 33.7343 133.396 35.2626 134.078 36.5727C134.788 37.8554 135.743 38.8516 136.944 39.5612C138.172 40.2708 139.482 40.6256 140.874 40.6256C142.484 40.6256 143.835 40.2435 144.927 39.4793C146.019 38.7151 146.906 37.7599 147.588 36.6136L150.208 38.0055C149.772 38.988 149.103 39.9023 148.202 40.7484C147.302 41.5672 146.224 42.2358 144.968 42.7544C143.74 43.2456 142.375 43.4913 140.874 43.4913ZM162.018 43.4913C160.626 43.4913 159.384 43.232 158.292 42.7134C157.201 42.1676 156.341 41.4307 155.713 40.5028C155.085 39.5748 154.772 38.5104 154.772 37.3096C154.772 36.1633 155.017 35.1262 155.508 34.1983C156 33.243 156.764 32.4379 157.801 31.7829C158.838 31.1279 160.162 30.6639 161.772 30.391L170.369 28.9581V31.7419L162.509 33.052C160.926 33.3249 159.78 33.8298 159.07 34.5667C158.388 35.3036 158.047 36.1769 158.047 37.1868C158.047 38.1693 158.429 39.0017 159.193 39.684C159.984 40.3663 160.994 40.7075 162.222 40.7075C163.723 40.7075 165.033 40.3936 166.152 39.7659C167.271 39.1109 168.145 38.2375 168.772 37.1458C169.4 36.0541 169.714 34.8396 169.714 33.5023V27.9347C169.714 26.6247 169.236 25.5603 168.281 24.7415C167.326 23.9227 166.084 23.5133 164.556 23.5133C163.218 23.5133 162.045 23.8545 161.035 24.5368C160.025 25.1918 159.275 26.0515 158.783 27.1159L156 25.6012C156.409 24.6733 157.05 23.8272 157.924 23.063C158.824 22.2988 159.848 21.6984 160.994 21.2617C162.14 20.7978 163.328 20.5658 164.556 20.5658C166.166 20.5658 167.585 20.8796 168.813 21.5074C170.069 22.1351 171.038 23.0084 171.72 24.1274C172.43 25.2191 172.784 26.4882 172.784 27.9347V43H169.714V38.6196L170.164 39.0699C169.782 39.8887 169.182 40.6392 168.363 41.3215C167.572 41.9765 166.63 42.5087 165.538 42.9181C164.474 43.3002 163.3 43.4913 162.018 43.4913ZM179.1 43V12.0097H182.17V43H179.1ZM195.862 43V12.5009H199.137V30.3091L198.4 29.9407L213.752 12.5009H217.845L205.523 26.5018L205.687 24.1684L218.582 43H214.652L204.254 27.9756L199.137 33.7889V43H195.862ZM222.197 43V21.057H225.267V43H222.197ZM222.197 17.0041V12.5009H225.267V17.0041H222.197ZM239.944 43.2456C237.979 43.2456 236.465 42.6725 235.4 41.5262C234.336 40.3799 233.804 38.7424 233.804 36.6136V24.1274H229.751V21.057H230.774C231.702 21.057 232.439 20.7568 232.985 20.1564C233.531 19.5287 233.804 18.7508 233.804 17.8229V15.9807H236.874V21.057H241.705V24.1274H236.874V36.6136C236.874 37.3505 236.983 38.0055 237.202 38.5787C237.42 39.1245 237.788 39.5612 238.307 39.8887C238.853 40.2162 239.576 40.3799 240.477 40.3799C240.695 40.3799 240.954 40.3663 241.254 40.339C241.555 40.3117 241.814 40.2844 242.032 40.2571V43C241.705 43.0819 241.336 43.1365 240.927 43.1638C240.518 43.2183 240.19 43.2456 239.944 43.2456ZM260.725 43.4913C259.334 43.4913 258.092 43.232 257 42.7134C255.908 42.1676 255.049 41.4307 254.421 40.5028C253.793 39.5748 253.479 38.5104 253.479 37.3096C253.479 36.1633 253.725 35.1262 254.216 34.1983C254.708 33.243 255.472 32.4379 256.509 31.7829C257.546 31.1279 258.87 30.6639 260.48 30.391L269.077 28.9581V31.7419L261.217 33.052C259.634 33.3249 258.488 33.8298 257.778 34.5667C257.096 35.3036 256.754 36.1769 256.754 37.1868C256.754 38.1693 257.137 39.0017 257.901 39.684C258.692 40.3663 259.702 40.7075 260.93 40.7075C262.431 40.7075 263.741 40.3936 264.86 39.7659C265.979 39.1109 266.853 38.2375 267.48 37.1458C268.108 36.0541 268.422 34.8396 268.422 33.5023V27.9347C268.422 26.6247 267.944 25.5603 266.989 24.7415C266.034 23.9227 264.792 23.5133 263.264 23.5133C261.926 23.5133 260.753 23.8545 259.743 24.5368C258.733 25.1918 257.983 26.0515 257.491 27.1159L254.708 25.6012C255.117 24.6733 255.758 23.8272 256.632 23.063C257.532 22.2988 258.556 21.6984 259.702 21.2617C260.848 20.7978 262.035 20.5658 263.264 20.5658C264.874 20.5658 266.293 20.8796 267.521 21.5074C268.777 22.1351 269.746 23.0084 270.428 24.1274C271.137 25.2191 271.492 26.4882 271.492 27.9347V43H268.422V38.6196L268.872 39.0699C268.49 39.8887 267.89 40.6392 267.071 41.3215C266.279 41.9765 265.338 42.5087 264.246 42.9181C263.182 43.3002 262.008 43.4913 260.725 43.4913ZM277.808 43V21.057H280.878V25.3146L280.182 25.1509C280.728 23.7317 281.615 22.6127 282.843 21.7939C284.099 20.9752 285.545 20.5658 287.183 20.5658C288.738 20.5658 290.13 20.9206 291.358 21.6302C292.614 22.3398 293.596 23.3223 294.306 24.5777C295.043 25.8059 295.411 27.1978 295.411 28.7534V43H292.341V29.9407C292.341 28.6033 292.095 27.4707 291.604 26.5428C291.14 25.6148 290.471 24.9052 289.598 24.414C288.752 23.8954 287.769 23.6362 286.65 23.6362C285.531 23.6362 284.535 23.8954 283.662 24.414C282.788 24.9052 282.106 25.6285 281.615 26.5837C281.124 27.5117 280.878 28.6306 280.878 29.9407V43H277.808ZM311.182 43.4913C309.135 43.4913 307.293 43 305.656 42.0175C304.018 41.0077 302.722 39.6431 301.767 37.9236C300.839 36.1769 300.375 34.2119 300.375 32.0285C300.375 29.8178 300.839 27.8528 301.767 26.1334C302.722 24.414 304.004 23.063 305.615 22.0805C307.252 21.0707 309.108 20.5658 311.182 20.5658C313.065 20.5658 314.744 20.9752 316.218 21.7939C317.692 22.6127 318.851 23.718 319.698 25.1099L319.206 25.9696V12.0097H322.277V43H319.206V38.0874L319.698 38.5377C318.933 40.1207 317.787 41.3488 316.259 42.2222C314.758 43.0682 313.065 43.4913 311.182 43.4913ZM311.346 40.4209C312.82 40.4209 314.144 40.0524 315.317 39.3155C316.518 38.5787 317.46 37.5825 318.142 36.327C318.851 35.0443 319.206 33.6115 319.206 32.0285C319.206 30.4456 318.851 29.0264 318.142 27.7709C317.46 26.4882 316.518 25.4784 315.317 24.7415C314.144 24.0046 312.82 23.6362 311.346 23.6362C309.9 23.6362 308.59 24.0046 307.416 24.7415C306.242 25.4784 305.314 26.4745 304.632 27.73C303.977 28.9854 303.65 30.4183 303.65 32.0285C303.65 33.6115 303.977 35.0443 304.632 36.327C305.314 37.5825 306.229 38.5787 307.375 39.3155C308.549 40.0524 309.872 40.4209 311.346 40.4209Z"
              fill="#C0C0C0"
            />
            <path
              d="M63.0903 136.139V188H50.4574V155.568L39.2283 188H28.2946L16.9915 155.494V188H4.3587V136.139H19.7988L33.9092 172.264L47.724 136.139H63.0903ZM87.4758 146.26C90.6278 146.26 93.3366 146.974 95.6021 148.402C97.8677 149.831 99.5422 151.776 100.626 154.239V146.777H113.185V188H100.626V180.539C99.5422 183.001 97.8677 184.946 95.6021 186.375C93.3366 187.803 90.6278 188.517 87.4758 188.517C84.0775 188.517 81.0239 187.68 78.3151 186.005C75.6556 184.282 73.5378 181.819 71.9618 178.618C70.435 175.416 69.6716 171.673 69.6716 167.389C69.6716 163.054 70.435 159.311 71.9618 156.159C73.5378 152.958 75.6556 150.52 78.3151 148.846C81.0239 147.122 84.0775 146.26 87.4758 146.26ZM91.539 157.341C88.8302 157.341 86.6385 158.228 84.964 160.001C83.3387 161.774 82.5261 164.236 82.5261 167.389C82.5261 170.541 83.3387 173.003 84.964 174.776C86.6385 176.549 88.8302 177.436 91.539 177.436C94.1985 177.436 96.3655 176.525 98.0401 174.702C99.7638 172.88 100.626 170.442 100.626 167.389C100.626 164.286 99.7638 161.848 98.0401 160.075C96.3655 158.253 94.1985 157.341 91.539 157.341ZM134.515 154.534C136.091 152.022 138.111 150.028 140.573 148.55C143.085 147.073 145.794 146.334 148.7 146.334V159.853H145.08C141.731 159.853 139.12 160.567 137.249 161.996C135.426 163.424 134.515 165.837 134.515 169.235V188H121.882V146.777H134.515V154.534ZM178.957 188L166.62 170.491V188H153.987V133.332H166.62V163.325L178.957 146.777H193.806L177.184 167.389L194.176 188H178.957ZM237.943 166.28C237.943 167.315 237.82 168.447 237.574 169.679H208.984C209.131 172.782 209.919 175.022 211.348 176.401C212.776 177.731 214.598 178.396 216.815 178.396C218.686 178.396 220.237 177.928 221.469 176.992C222.7 176.057 223.513 174.85 223.907 173.373H237.278C236.736 176.278 235.554 178.889 233.732 181.203C231.91 183.469 229.595 185.267 226.788 186.596C223.981 187.877 220.853 188.517 217.406 188.517C213.367 188.517 209.772 187.68 206.62 186.005C203.517 184.282 201.079 181.819 199.306 178.618C197.533 175.416 196.646 171.673 196.646 167.389C196.646 163.054 197.508 159.311 199.232 156.159C201.005 152.958 203.468 150.52 206.62 148.846C209.772 147.122 213.367 146.26 217.406 146.26C221.493 146.26 225.089 147.097 228.191 148.772C231.294 150.446 233.683 152.81 235.357 155.864C237.081 158.868 237.943 162.34 237.943 166.28ZM225.163 164.36C225.212 161.651 224.473 159.632 222.946 158.302C221.469 156.923 219.622 156.233 217.406 156.233C215.091 156.233 213.17 156.923 211.643 158.302C210.116 159.681 209.255 161.7 209.058 164.36H225.163ZM267.873 177.14V188H262.185C257.358 188 253.591 186.818 250.882 184.454C248.222 182.041 246.893 178.076 246.893 172.56V157.415H241.352V146.777H246.893V136.656H259.525V146.777H267.799V157.415H259.525V172.782C259.525 174.407 259.845 175.54 260.486 176.18C261.175 176.82 262.308 177.14 263.884 177.14H267.873ZM300.682 146.26C304.081 146.26 307.11 147.122 309.769 148.846C312.478 150.52 314.596 152.958 316.123 156.159C317.699 159.311 318.487 163.054 318.487 167.389C318.487 171.673 317.699 175.416 316.123 178.618C314.596 181.819 312.478 184.282 309.769 186.005C307.11 187.68 304.081 188.517 300.682 188.517C297.53 188.517 294.822 187.803 292.556 186.375C290.291 184.946 288.641 183.001 287.606 180.539V207.651H274.974V146.777H287.606V154.239C288.641 151.776 290.291 149.831 292.556 148.402C294.822 146.974 297.53 146.26 300.682 146.26ZM296.619 157.341C293.96 157.341 291.768 158.253 290.044 160.075C288.37 161.848 287.533 164.286 287.533 167.389C287.533 170.442 288.37 172.88 290.044 174.702C291.768 176.525 293.96 177.436 296.619 177.436C299.328 177.436 301.495 176.549 303.12 174.776C304.795 173.003 305.632 170.541 305.632 167.389C305.632 164.236 304.795 161.774 303.12 160.001C301.495 158.228 299.328 157.341 296.619 157.341ZM362.059 146.26C365.211 146.26 367.919 146.974 370.185 148.402C372.451 149.831 374.125 151.776 375.209 154.239V146.777H387.768V188H375.209V180.539C374.125 183.001 372.451 184.946 370.185 186.375C367.919 187.803 365.211 188.517 362.059 188.517C358.66 188.517 355.607 187.68 352.898 186.005C350.238 184.282 348.121 181.819 346.545 178.618C345.018 175.416 344.254 171.673 344.254 167.389C344.254 163.054 345.018 159.311 346.545 156.159C348.121 152.958 350.238 150.52 352.898 148.846C355.607 147.122 358.66 146.26 362.059 146.26ZM366.122 157.341C363.413 157.341 361.221 158.228 359.547 160.001C357.922 161.774 357.109 164.236 357.109 167.389C357.109 170.541 357.922 173.003 359.547 174.776C361.221 176.549 363.413 177.436 366.122 177.436C368.781 177.436 370.948 176.525 372.623 174.702C374.347 172.88 375.209 170.442 375.209 167.389C375.209 164.286 374.347 161.848 372.623 160.075C370.948 158.253 368.781 157.341 366.122 157.341ZM415.082 146.26C420.401 146.26 424.858 147.737 428.454 150.693C432.049 153.598 434.315 157.612 435.25 162.734H421.879C421.485 160.961 420.672 159.582 419.441 158.597C418.209 157.612 416.658 157.12 414.787 157.12C412.57 157.12 410.748 158.006 409.32 159.779C407.891 161.503 407.177 164.039 407.177 167.389C407.177 170.738 407.891 173.299 409.32 175.072C410.748 176.795 412.57 177.657 414.787 177.657C416.658 177.657 418.209 177.165 419.441 176.18C420.672 175.195 421.485 173.816 421.879 172.043H435.25C434.315 177.165 432.049 181.203 428.454 184.158C424.858 187.064 420.401 188.517 415.082 188.517C411.044 188.517 407.448 187.68 404.296 186.005C401.193 184.282 398.755 181.819 396.982 178.618C395.209 175.416 394.323 171.673 394.323 167.389C394.323 163.054 395.185 159.311 396.909 156.159C398.682 152.958 401.144 150.52 404.296 148.846C407.448 147.122 411.044 146.26 415.082 146.26ZM480.999 166.28C480.999 167.315 480.876 168.447 480.629 169.679H452.039C452.187 172.782 452.975 175.022 454.403 176.401C455.832 177.731 457.654 178.396 459.87 178.396C461.742 178.396 463.293 177.928 464.524 176.992C465.756 176.057 466.568 174.85 466.962 173.373H480.334C479.792 176.278 478.61 178.889 476.788 181.203C474.965 183.469 472.651 185.267 469.843 186.596C467.036 187.877 463.909 188.517 460.461 188.517C456.423 188.517 452.827 187.68 449.675 186.005C446.572 184.282 444.134 181.819 442.361 178.618C440.588 175.416 439.702 171.673 439.702 167.389C439.702 163.054 440.564 159.311 442.288 156.159C444.061 152.958 446.523 150.52 449.675 148.846C452.827 147.122 456.423 146.26 460.461 146.26C464.549 146.26 468.144 147.097 471.247 148.772C474.35 150.446 476.738 152.81 478.413 155.864C480.137 158.868 480.999 162.34 480.999 166.28ZM468.218 164.36C468.267 161.651 467.529 159.632 466.002 158.302C464.524 156.923 462.677 156.233 460.461 156.233C458.146 156.233 456.226 156.923 454.699 158.302C453.172 159.681 452.31 161.7 452.113 164.36H468.218Z"
              fill="#20253A"
            />
            <path
              d="M337.675 133.332V188H325.042V133.332H337.675Z"
              fill="#3FC344"
            />
          </svg>
          <div className="container__home__jumbotron__left__info">
            FIND MEAL PREP NEAR YOU! Weekkly is a meal kit and meal prep
            marketplace that connects you to providers who can cook food for you
            and your family on a weekly, bi-weekly or monthly basis.
          </div>
          <Link to="/" className="container__home__jumbotron__left__link">
            Sign up
          </Link>
        </div>
      </Fade>

      <Fade right>
        <div className="container__home__jumbotron__right">
          <Fade></Fade>
          <div className="container__home__jumbotron__right__title">
            {currentDay.day}
          </div>
          <img
            src={currentDay.img}
            alt="food"
            className="container__home__jumbotron__right__image"
          />
        </div>
      </Fade>
    </div>
  );
}
