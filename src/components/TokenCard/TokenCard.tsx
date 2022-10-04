import classNames from "classnames";
import React, { useMemo } from "react";
import FimbIcons from "../FimbIcons";
import ProgressBar from "../ProgressBar";
import "./TokenCard.scss";

//improving note
//settup package to accept import type from other files
export interface TokenProps {
  name: string;
  image: string;
  initials: string;
  value: number;
  unitPrice: number;
  totalTokens: number;
  totalSoldTokens: number;
  buyers: number;
  monthlyReturn: number;
  link: () => void;
  id: string;
  ownerName: string;
  ownerLogo: string;
  status: string;
}

export interface TokenCardProps {
  onLike: (id: string) => void;
  token: TokenProps;
}

const TokenCard: React.FC<TokenCardProps> = ({ onLike, token, ...props }) => {
  const getBadge = useMemo(() => {
    switch (token.status) {
      case "open":
        return <div className="badgeContainer blue">Aberto</div>;

      case "new":
        return <div className="badgeContainer orange">Lançamento</div>;

      case "closed":
        return <div className="badgeContainer purple">Encerrado</div>;

      default:
        return <div />;
    }
  }, [token]);

  return (
    <div className="tokenCardContainer">
      <div className="topContainer">
        <img src={token.image} className="bannerImg" />
        <div className="topActions">
          {getBadge}
          <div onClick={() => onLike(token.id)} className="likeContainer">
            <FimbIcons color="white" hover hoverColor="purple" icon="heart" />
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="row title">
          <p className="initials">{token.initials}</p>
          <p className="value">
            <p className="currency">R$</p>
            {token.value.toLocaleString()}
          </p>
        </div>
        <div className="row subtitle">
          <p className="name">{token.name}</p>
          <p className="interest">{token.monthlyReturn}% ao mês</p>
        </div>
        <div className="row progress">
          <ProgressBar
            percentage={(token.totalSoldTokens / token.totalTokens) * 100}
          />
        </div>
        <div className="row caption">
          <p className="text">Total captado</p>
          <p className="text">
            R$
            <p className="ammount">
              {(token.totalSoldTokens * token.unitPrice).toLocaleString()}
            </p>
          </p>
        </div>
        <div className="row info">
          <div className="item">
            <div className="icon orange">
              <FimbIcons icon="double-users" color="orange" />
            </div>
            <div className="col">
              <p className="title org">{token.buyers}</p>
              <p className="subtitle">compradores</p>
            </div>
          </div>
          <div className="item">
            <div className="icon purple">
              <FimbIcons icon="fimb" color="purple" />
            </div>
            <div className="col">
              <p className="title prp">{token.totalSoldTokens}</p>
              <p className="subtitle">vendidos</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cia">
            <img src={token.ownerLogo} />
            <p>{token.ownerName}</p>
          </div>
          <button onClick={token.link} className="moreInfoBtn">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
