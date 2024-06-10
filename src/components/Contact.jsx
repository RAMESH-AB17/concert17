import './Contact.css';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='ab  px-4 lg:px-4 mt-20  max-w-screen-xl mx-auto min-h-screen-xl h-screen' id="contact">
        <div className='feed'>
          <form>
            <p className='wow'>Booking Tickets</p><br/>
            <label htmlFor="name">Name</label><br/>
            <input type="text" id="name" name="name"/><br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email"/><br /><br />
            <label htmlFor="phone">Phone-no</label><br />
            <input type="text" id="phone" name="phone"/><br /><br />
            <label>Choose Ticket Type</label><br/><br/>
            <input type="radio" id="economy" name="ticketType" value="economy"/>
            <label htmlFor="economy">Economy</label><br/><br/>
            <input type="radio" id="business" name="ticketType" value="business"/>
            <label htmlFor="business">Business</label><br/><br/>
            <input type="radio" id="firstclass" name="ticketType" value="firstclass"/>
            <label htmlFor="firstclass">First class</label><br/><br/>
            <label htmlFor="number">Number of tickets</label><br/><br/>
            <input type="text" id='number' name="number"/><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        <div className='artist'>
          <form>
            <p className='wow'>Artist Booking</p><br/>
            <label htmlFor="artistName">Name</label><br/>
            <input type="text" id="artistName" name="artistName"/><br /><br />
            <label htmlFor="artistEmail">Email</label><br />
            <input type="email" id="artistEmail" name="artistEmail"/><br /><br />
            <label htmlFor="artistPhone">Phone-no</label><br />
            <input type="text" id="artistPhone" name="artistPhone"/><br /><br />
            <label htmlFor="eventDate">Date of event</label><br />
            <input type="date" id="eventDate" name="eventDate"/><br /><br />
            <label htmlFor="eventTime">Proposed time of event</label><br/>
            <input type="time" id='eventTime' name="eventTime"/><br/><br/>
            <label htmlFor="comments">Additional comments</label><br/><br/>
            <textarea id="comments" name="comments" cols={25}/><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        <div className='add'>
          <h3>Contact Us</h3>
          <p className='wow'>
            516 High Street,<br/>
            Bellingham,<br/>
            Washington, 98225<br/>
            Contact No: 364-123-7300<br/>
            Email: jessy.agn@wa.jov<br/><br/>
          </p>
          <iframe
            title="Embedded Map"
            width={300}
            height={200}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.853694159432!2d-122.4725626843938!3d48.7561764792778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485b7b3db6be6b3%3A0x6059b50826975cd0!2s516%20High%20St%2C%20Bellingham%2C%20WA%2098225%2C%20USA!5e0!3m2!1sen!2sin!4v1649391656881!5m2!1sen!2sin"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
