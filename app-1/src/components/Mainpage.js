import bizcore from "D:/react/app-1/src/images/bizcore.png";

export default function LOGO() {
  return (
    <div class="align_center">
      <img className="logo" src={bizcore} alt="" />
      <h2 className="text-center">"Bring your vision into action"</h2>
      <button className="btn">Join Us</button>
    </div>
  );
}
