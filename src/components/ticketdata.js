const ticketdata = [
    {    
        TicketID:'T-23456238' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-23006238' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-4564538' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-2345632138' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-23446238' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-20456238' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-23456230' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-23406238' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    {    
        TicketID:'T-23456208' ,
        Date:'21-03-2025',
        Responder: 'James Daniel',
        Responsetime:'3 min 30 secs',
        CustomerRating:3,
    },
    
    
    
    
    
    
];
export const getTicketdata = function(ticketpage, ticketlimit){
    let ticketarray = [];
    for (let i = (ticketpage - 1)* ticketlimit; i < (ticketpage * ticketlimit) && ticketdata[i]; i++) {
        ticketarray.push(ticketdata[i]);
        
    }
    
    return ticketarray;
    
}


export const getticketLength = function () {
    return ticketdata.length;
}