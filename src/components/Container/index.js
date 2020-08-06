import styled from 'styled-components'

const Container = styled.div`
    display: block;
    height: 100%;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 100%;

  /** Mobile **/
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 985px;
    padding-left: 280px;
  }

  @media (min-width: 1440px) {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 1360px;
    padding-left: 280px;
  }
`
export default Container;