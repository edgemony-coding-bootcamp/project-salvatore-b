# EDGEMONY FINAL PROJECT - TEAM B

## Organizzazione

- daily standup **lun-ven 9.30-10**
- durante il daily si segnalano problemi, si discutono implementazioni
- si lavora in maniera autonoma
- i task possono essere assegnati sia dal team leader che dal team stesso

## Strumenti

- Github
  - repo
  - issues
  - board
- Slack
- Google Meet & Calendar
- hosting: **scelta libera**
- framework: **scelta tra CRA, Vite, Next**
- librerie: **scelta libera**

## Backend

L'endpoint di backend è:

- [https://edgemony-backend.herokuapp.com/albums/](https://edgemony-backend.herokuapp.com/albums/)
- [https://edgemony-backend.herokuapp.com/playlist/](https://edgemony-backend.herokuapp.com/playlist/)

i dati esposti seguono questo schema:

```json
{
  "id": number,
  "title": string,
  "artist": string,
  "cover": string,
  "year": number,
  "length": number,
  "genres": string[],
  "songs": string[],
  "new": boolean,
  "favorite": boolean,
  "rating": number,
  "users": number[],
  "featuring": string[]
}
```

su richiesta è possibile modificare lo schema per aggiungere nuovi dati.

## Repository

- il branch `main` è protetto
- ogni task viene sviluppato in una branch con nomenclatura `feature/[task]` o `fix/[task]` in base alla tipologia
- per mergiare il codice da una branch verso `main` si crea una PR assegnando tutti i membri del team come reviewer
- le PR possono essere mergiate solo aver ricevuto **almeno 1 approvazione**
- siete liberi di fare fork ma solo questo repo sarà quello preso in considerazione

## Obiettivo

- **SPOTIFY CLONE! (EDGIFY)**
  - usate l'attuale UI di Spotify come punto di partenza ma siete liberi di applicare eventuali personalizzazioni
- **obiettivi minimi:**
  - visualizzare lista (in griglia) di album e playlist disponibili
    - filtri per genere
    - visualizza solo album o playlist
  - cliccando sulla cover vedo i dettagli di un singolo elemento
  - nel dettaglio di una serie posso:
    - marcare un album o playlist come preferito
    - esprimere un giudizio, voto da 1 a 5
    - cancellare/nascondere la serie
  - layout responsive
- **obiettivi extra:**
  - flusso di login (signin) e mostrare solo i dati legati all'utente loggato
  - flusso creazione nuove utente (signup)
  - ricerca testuale (titolo)
  - filtri avanzati (artista, anno, ecc)
