import '../style/Nav.css';
import Dientu from '../image/dientu.png';
function Nav() {
  return (
    <div className="Nav">
       <div className="wrap">
           <div className="n-cata">
                <h3>Khám phá danh mục</h3>
                <div className="c-box">
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử</p>
                    </div>
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử</p>
                    </div>
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử</p>
                    </div>
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử </p>
                    </div>
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử </p>
                    </div>
                    <div className="c-item">
                        <img src={Dientu} alt="Cata - dientu" />
                        <p>Đồ điện tử</p>
                    </div>
                </div>
           </div>
            
       </div>
    </div>
  );
}
export default Nav;
