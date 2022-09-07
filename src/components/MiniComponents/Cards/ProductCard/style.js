import styled from "@emotion/styled"

export const Card = styled.div`
background: linear-gradient(0deg, rgba(46, 102, 236, 0.1), rgba(46, 102, 236, 0.1)), #FFFFFF;
border-radius: 8px;
padding:10px;
.card-image{
	
}
.card-title-block{
    .card-btn{
        
    }
}
	// p{
    //     font-weight: 400;
    //     font-size: 13px;
    //     line-height: 160%;
    //     letter-spacing: 0.03em;
    //     color: rgba(0, 0, 0, 0.85);
	// 	margin-bottom:20px;

	// }
	
`
Card.Body = styled.div`
    padding-left:5px;
    padding-right:5px;
`
Card.Footer = styled.div`
padding:0;
border:none;
background:transparent;
display: flex;
font-weight: 600;

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
    svg{
        margin-left:10px;
    }
`
Card.Badge = styled.span` 
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    min-width:36px;
    max-height:18px;
    border-radius: 3px;
    padding:3px 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${p => p.variation === "green" && `
        background: #239710;
        color: #FFFFFF;
    `}
    ${p => p.variation === "blue" && `
        background: #2E66EC;
        color: #FFFFFF;
    `}
`
Card.Title = styled.span` 
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:;
`
