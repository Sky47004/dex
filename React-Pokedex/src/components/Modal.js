import React from 'react'

export default function Modal(props) {

  const colorType = (type) => { 
    switch(type) {
      case ('fire'):
        return 'fire'
      case ('water'):
        return 'water'
      case ('normal'):
        return 'normal'
      case ('flying'):
        return 'flying'
      case ('fighting'):
        return 'fighting'
      case ('poison'):
        return 'poison'
      case ('electric'):
        return 'electric'
      case ('dragon'): 
        return 'dragon'
      case ('ground'):
        return 'ground'
      case ('grass'):
        return 'grass'
      case ('ice'):
        return 'ice'
      case ('bug'):
        return 'bug'
      case ('psychic'):
        return 'psychic'
      case ('rock'):
        return 'rock'
      case ('ghost'):
        return 'ghost'
      // for future iterations
      case ('steel'):
        return 'steel'
      case ('fairy'):
        return 'fairy'
      default:
        return ''
    }
  }
  

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.pokemon.name}</h4>
        </div>
        <div className="media-query-container">
          <div className="modal-body">
            <span style={{'fontSize': props.pokemon.id >= 100 ? '300px': '', 'top': props.pokemon.id >= 100 ? '-10%' : ''}} 
              className="modal-body--poke-id">{props.pokemon.id}</span>
            <img className="modal-body--poke-img" src={props.pokemon.imageUrl} alt={props.pokemon.name}/>
          </div>
          <div className="modal-info-box">
            <div className="info-box-height-weight">
              <p><span className="span-info-box">Height:</span> {props.pokemon.height / 10} {props.pokemon.height / 10 === 1 ? 'meter' : 'meters'}</p>
              <p><span className="span-info-box">Weight:</span> {props.pokemon.weight / 10} {props.pokemon.weight === 1 ? 'kilogram' : 'kilograms'}</p>
            </div>
            <div>
              <ul className="modal-info-box--types">
                {props.pokemon.types.map((type, index) => (
                                                  // switch statement here changes class based on type
                  <li key={index} className={`badge-color ${colorType(type.type.name)}`}>
                    <span>{type.type.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-btn">Close</button>
        </div>
      </div>
    </div>
  )
}