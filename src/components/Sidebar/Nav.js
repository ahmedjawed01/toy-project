import styled from 'styled-components';

const Nav = styled.div`
  background: #2d275d;
  bottom: 0;
  font-size: 18px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0 40px;
  position: fixed;
  top: 0;
  transform: translateX(0);
  transition-duration: 235ms;
  width: 280px;
  z-index: 99999;

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  > {
    div {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      &:last-of-type {
        &::after {
          border-bottom: none;
        }
      }
    }
  }

  .side-nav__submenu {
    height: 0;
    margin-top: auto;
  }

  .initialised {
    .side-nav__submenu {
      height: auto;
      transition: margin-top 235ms cubic-bezier(0.4, 0, 0.2, 1);

      li {
        padding: 10px 20px;
      }
    }
  }

  .side-nav__menu-item {
    overflow: hidden;
    position: relative;
  }

  .side-nav__wrapper {
    overflow: hidden;
    background: #f3effd;
    width: 100%;

    &.transparent {
      background: none;
    }
  }

  .actions {
    padding: 1.25rem;

    .button {
      margin-bottom: 10px;
    }
  }

  .heading {
    color: #fff;
    margin: 1.25rem;
    font-size: 1.25rem;
    text-align: center;
    padding-bottom: 1.25rem;
    text-transform: capitalise;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .navigation {
    padding: 20px 0;
  }

  .brand-lookup {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 72px;
    margin-right: auto;
    padding: 20px;
  }

  .create-survey {
    width: 100%;
    bottom: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 20px;
  }

  .side-nav-menu {
    padding: 0;
    margin: 0;
  }

  .side-nav-menu-item {
    overflow: hidden;
    position: relative;
    transition: border 0.4s ease;
    color: #fff;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(45, 38, 93, 0.3);
    width: 100%;

    .header {
      font-size: 0.875rem !important;
      text-transform: uppercase !important;
      padding-left: 10px;
    }

    &.custom {
      padding-bottom: 40px;

      a {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        font-size: 1rem;
      }
    }

    &.active {
      background: #4414b2;
      border-left: 4px solid #fff;
    }

    a {
      color: #fff;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 20px;

      i {
        padding-right: 10px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .side-nav-toggle,
  .side-nav-link {
    cursor: pointer !important;
    color: #fff !important;
    padding: 16px 20px !important;
    display: block !important;
    padding-left: 24px !important;
    text-align: left !important;
    width: 100% !important;
    font-size: 18px !important;
  }

  .close {
    color: #fff !important;
    display: none !important;
    position: absolute !important;
    display: none;
    right: 17px;
    top: 17px;
  }

  @media screen and (max-width: 1023px) {
    transform: translateX(-100%);

    .close {
      display: block !important;
    }
  }
`;

export default Nav;
