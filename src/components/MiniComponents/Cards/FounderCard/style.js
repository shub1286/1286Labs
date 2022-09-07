import styled from "@emotion/styled"

export const Card = styled.div`
background: linear-gradient(0deg, rgba(46, 102, 236, 0.1), rgba(46, 102, 236, 0.1)), #FFFFFF;
border-radius: 8px;
padding:20px;
width:100%;
height:100%;
	
`
  

Card.Body = styled.div`
    padding-left:5px;
    padding-right:5px;
    text-align:center;
`
Card.Footer = styled.div`
padding:0;
border:none;
background:transparent;
display: flex;
justify-content:center;

`    
Card.Image = styled.div`    
    margin-bottom:16px;
	position: relative;
	img{
		width:100%;
		border-radius: 6px;
	}
`
Card.Link = styled.div`
    display: flex;
    
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #000000;
    .twitter-icon{
        margin-right:10px;
    }
    svg{
        path{
            fill:#000000;
        }
    }
    .mave-icon{
        margin-left:10px;
    }
`
Card.Title = styled.span` 
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:;
`
