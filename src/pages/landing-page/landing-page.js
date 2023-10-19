import GroupItems from "./groupItems/groupItems";
import GroupItemsList from "./group-items-list/group-items-list";
import "./landing-page.scss";
import { Link, useParams } from "react-router-dom";

const LandingPage = ({ groups, products, children }) => {
  // const { code } = useParams();

  return (
    <div className="border-wrapper-LandingPage">
      {children}
      {groups.map((group) => {
        return (
          <section className="wrapper-LandingPage" key={group.id}>
            <Link className="container-GroupItems" to={`/groups/${group.id}`}>
              <GroupItems groupOfProduct={group} />
            </Link>
            <div className="container-GroupItemsList">
              <GroupItemsList index={group.id} products={products} />
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default LandingPage;
