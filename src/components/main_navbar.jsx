/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const MainNavbar = () => {
  const cp_navi = css`
    background-color: rgba(192, 171, 200, 0.227);
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
    display: flex;
    margin: 0;
    padding: 0;

    a {
      &:hover {
        cursor: pointer;
      }
    }

    li {
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      list-style: none;
      &:hover {
        background-color: rgba(160, 102, 226, 0.851);
        a {
          color: rgb(255, 255, 255);
        }
      }
    }

    li > a {
      color: #000000;
      line-height: 4.5rem;
      padding: 0 3rem;
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 500;
    }
  `;

  const dropdownLi = css`
    div {
      background-color: rgba(184, 115, 211, 0.516);
      border-top: 0;
      border-radius: 0 0 0.4rem 0.4rem;
      box-shadow: 0 0.5rem 0.5rem -0.1rem rgba(0, 0, 0, 0.228);
      display: none;
      margin: 0;
      opacity: 0;
      position: absolute;
      width: 16.5rem;
      visibility: hidden;
      -webkit-transiton: opacity 0.2s;
      transition: opacity 0.2s;
      z-index: 7;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    ul > li > a {
      color: #ffffff;
      display: block;
      padding: 1.2rem 2.4rem;
      text-decoration: none;
      font-size: 1.8rem;
    }

    ul > li {
      &:hover {
        a {
          color: #ffffff;
          display: block;
          padding: 1.2rem 2.4rem;
          text-decoration: none;
          font-size: 1.8rem;
        }
      }
    }

    a > span {
      border-top: 0.4rem solid #aaaaaa;
      border-right: 0.4rem solid transparent;
      border-left: 0.4rem solid transparent;
      content: "";
      display: inline-block;
      height: 0;
      width: 0;
      vertical-align: middle;
      -webkit-transition: color 0.1s linear;
      transition: color 0.1s linear;
    }

    &:hover {
      div {
        display: block;
        opacity: 1;
        visibility: visible;
      }

      a > span {
        border-top-color: rgb(255, 255, 255);
      }
    }
  `;

  return (
    <ul css={cp_navi}>
      <li>
        <a>Home</a>
      </li>
      <li css={dropdownLi}>
        <a>
          Products <span />
        </a>
        <div>
          <ul>
            {["Protein", "Gym Clothes", "Item"].map((e) => {
              return (
                <li>
                  <a>{e}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
      {["About", "Contact"].map((e) => {
        return (
          <li>
            <a>{e}</a>
          </li>
        );
      })}
    </ul>
  );
};
