import styled from 'styled-components';

const StyledPanelContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto auto;
  height: auto;
  margin-right: 1.25rem;
`;

const TopPanel = ({ bg, icon, children }) => {
  return (
    <StyledPanelContainerDiv className={`relative p-6 rounded-md ${bg ? bg : 'bg-white'}`}>
      {children}
      {icon && (
        <div className="col-start-2 row-span-2 flex justify-center items-center pl-10 ">
          <div className={`bg-white p-2 ${bg ? ' bg-blackOpacity2' : ' bg-blueOpacity'}`}>
            <div className={`material-icons text-main ${bg ? 'text-whiteOpacity' : 'text-blueOpacity2'}`}>{icon}</div>
          </div>
        </div>
      )}
    </StyledPanelContainerDiv>
  )
}

export default TopPanel;