import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrub.css";

const BreadCrub = (props) => {
  const { siteMapPath, handleSiteMapClick } = props;

  return (
    <div className="breaddiv my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {siteMapPath &&
            siteMapPath.map((item, index) => {
              return (
                <li
                  className={
                    item?.clickable
                      ? "breadcrumb-item pathcss"
                      : "breadcrumb-item pathcss active"
                  }
                  key={index}
                  style={{ marginLeft: "-10px" }}
                >
                  {item?.clickable && (
                    <>
                      {item?.isHome && (
                        <svg
                          width={12}
                          height={14}
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.30975 1.00195C6.26911 0.961202 6.22083 0.928877 6.16768 0.906822C6.11453 0.884766 6.05755 0.873413 6 0.873413C5.94245 0.873413 5.88547 0.884766 5.83232 0.906822C5.77917 0.928877 5.73089 0.961202 5.69025 1.00195L0.440251 6.25195C0.399649 6.29265 0.367468 6.34096 0.345548 6.39411C0.323628 6.44725 0.312398 6.5042 0.312501 6.5617V12.6867C0.312501 12.8027 0.358594 12.914 0.440641 12.9961C0.522689 13.0781 0.633968 13.1242 0.750001 13.1242H4.6875C4.80353 13.1242 4.91481 13.0781 4.99686 12.9961C5.07891 12.914 5.125 12.8027 5.125 12.6867V9.1867H6.875V12.6867C6.875 12.8027 6.92109 12.914 7.00314 12.9961C7.08519 13.0781 7.19647 13.1242 7.3125 13.1242H11.25C11.366 13.1242 11.4773 13.0781 11.5594 12.9961C11.6414 12.914 11.6875 12.8027 11.6875 12.6867V6.5617C11.6876 6.5042 11.6764 6.44725 11.6545 6.39411C11.6325 6.34096 11.6004 6.29265 11.5598 6.25195L10.375 5.06807V2.1867C10.375 2.07066 10.3289 1.95938 10.2469 1.87734C10.1648 1.79529 10.0535 1.7492 9.9375 1.7492H9.0625C8.94647 1.7492 8.83519 1.79529 8.75314 1.87734C8.67109 1.95938 8.625 2.07066 8.625 2.1867V3.31807L6.30975 1.00195ZM1.1875 12.2492V6.74282L6 1.93032L10.8125 6.74282V12.2492H7.75V8.7492C7.75 8.63316 7.70391 8.52188 7.62186 8.43984C7.53981 8.35779 7.42853 8.3117 7.3125 8.3117H4.6875C4.57147 8.3117 4.46019 8.35779 4.37814 8.43984C4.29609 8.52188 4.25 8.63316 4.25 8.7492V12.2492H1.1875Z"
                            fill="#212529"
                          />
                        </svg>
                      )}
                      {item?.onClick && (
                        <Link
                          className={"default"}
                          onClick={() => handleSiteMapClick(item?.name)}
                          style={{ marginLeft: "5px" }}
                        >
                          {item?.name}
                        </Link>
                      )}
                      {!item?.onClick && (
                        <Link
                          className={"default"}
                          to={item?.path}
                          style={{ marginLeft: "5px" }}
                        >
                          {item?.name}
                        </Link>
                      )}
                    </>
                  )}
                  {!item?.clickable && <a>{item?.name}</a>}
                </li>
              );
            })}

          {/*  */}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrub;
