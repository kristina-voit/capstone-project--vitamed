import { useState } from 'react';
import NewEventInput from './NewEventInput';
import isAppointmentValid from '../../lib/validationAppointment';
import styled from 'styled-components';

function NewAppointment({ onAddAppointment, index }) {
  const initialAppointment = {
    arztname: '',
    datum: '',
    fachrichtung: '',
    adresse: '',
    telefon: '',
    email: '',
    website: '',
  };
  const [appointment, setAppointment] = useState(initialAppointment);

  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setAppointment({
      ...appointment,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAppointmentValid(appointment)) {
      onAddAppointment(appointment);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  return (
    <section>
      <details>
        <summary>Neuen Termin eintragen</summary>

        <Form onSubmit={handleSubmit}>
          <NewEventInput
            onNewEventInputChange={handleChange}
            name="arztname"
            value={appointment.arztname}
            placeholder="Name"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            type="date"
            name="datum"
            value={appointment.datum}
            placeholder="Datum, Uhrzeit"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="fachrichtung"
            value={appointment.fachrichtung}
            placeholder="Fachrichtung"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="adresse"
            value={appointment.adresse}
            placeholder="Adresse"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="telefon"
            value={appointment.telefon}
            placeholder="Telefon (z.B. 0123456789)"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="email"
            value={appointment.email}
            placeholder="Email-Adresse (z.B. muster@muster.de)"
          ></NewEventInput>

          <NewEventInput
            onNewEventInputChange={handleChange}
            name="website"
            value={appointment.website}
            placeholder="Website (z.B. www.muster.de)"
          ></NewEventInput>

          <div>
            {hasFormErrors && (
              <ErrorMessage>
                <Warning>Bitte füllen Sie alle Felder korrekt aus.</Warning>
              </ErrorMessage>
            )}
            <Button>Termin hinzufügen</Button>

            <Button
              type="reset"
              onClick={() => {
                setAppointment(initialAppointment);
              }}
            >
              Zurücksetzen
            </Button>
          </div>
        </Form>
      </details>
    </section>
  );
}

export default NewAppointment;

const Button = styled.button`
  background: #fff;
  border-radius: 15px;
  border: solid 2px #509b9b;
  color: #509b9b;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  height: 2rem;
  justify-content: right;
  margin-left: 5px;
  margin-top: 1rem;
  padding: 0 1.3rem;
`;

const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 6px;
  color: white;
  margin: 0 0 1rem;
`;

const Form = styled.form`
  background: #fff4f4;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #4b417a;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  margin: 1rem;
  padding: 1rem;
`;

const Warning = styled.p`
  color: red;
  margin: 0;
  padding: 0;
`;
