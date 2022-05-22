const ContactUs = () => {
    return (
        <div id="contactus">
            <h1>Contact Us</h1>
            <form>
                <table id="contact-table">
                    <tbody>
                    <tr className="table-row">
                        <td className="table-data"><label htmlFor="name">Name</label></td>
                        <td className="table-data"><input type="text" name="name" id="name"/></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr className="table-row">
                        <td className="table-data"><label htmlFor="phone">Phone</label></td>
                        <td className="table-data"><input type="text" name="phone" id="phone"/></td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr className="table-row">
                        <td className="table-data"><label htmlFor="query">Message</label></td>
                        <td className="table-data"><textarea name="query" id="query" cols="30" rows="10"></textarea></td>
                    </tr>
                    </tbody>
                </table>
                <input type="button" value="Submit" id="submit"/>
            </form>
        </div>
    )
}