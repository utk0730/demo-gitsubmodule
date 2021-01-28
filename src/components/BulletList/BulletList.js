import React from "react";

// Custom Imports
import Wrapper from "../Wrapper";
import { TEXT_COLOR, TICK_IMG } from "../../constants";
import Naruto from "../../images/naruto.jpg"

const BulletList  = ({ list, accessKey, pageEnabled, page, handlePage }) => {
  return (
    <Wrapper>
      <img alt="" src={Naruto}/>
      <ul className="nav flex-column">
        {list &&
          list.map((item, index) =>
            !pageEnabled || (pageEnabled && page && index < page) ? (

              //@ts-ignore
              <li className="nav-item bullet-list">{item[accessKey]}</li>
            ) : (
                ""
              )
          )}
        {pageEnabled ? (
         page &&  page < list.length ? (
            <a className="view-more" onClick={() => handlePage && handlePage(page + 5)}>
              View More
            </a>
          ) : list.length > 5 ? (
            <a className="view-more" onClick={() => handlePage && handlePage(5)}>
              View Less
            </a>
          ) : (
                ""
              )
        ) : (
            ""
          )}
      </ul>

      <style jsx>{`
        ul :global(li) {
          position: relative;
          color: ${TEXT_COLOR};
          font-weight: 400;
          opacity: 0.9;
          letter-spacing: 0.18px;
          font-size: 13px;
          margin-bottom: 10px;
          margin-top: 10px;
        }

        ul :global(li:last-child) {
          margin-bottom: 0px;
        }

        ul.nav :global(li:first-child) {
          margin-top: 0px;
        }

        ul :global(.bullet-list::before) {
          // content: "\f111";
          content: url(${TICK_IMG});
          color: #3f44c9;
          font-weight: bold;
          font-family: fontawesome;
          font-size: 9px;
          position: absolute;
          left: -25px;
          top: 4px;
        }
        .view-more {
          font-size: 12px;
          color: #3f44c9;
          cursor: pointer;
          position: absolute;
          right: 30px;
          bottom: 10px;
        }
        @media (max-width: 575.98px) {
          ul :global(li) {
            font-size: 12px;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default BulletList;
