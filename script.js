let vcard= {
    str_vcard:'BEGIN:VCARD\nVERSION:3.0\n',
    str_end:'\nEND:VCARD',
    goog_chart:'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=',
    build_name: function(){
        const first_name = 'Mohamad',
            last_name = 'Hammash';
        
        vcard.str_vcard += 'N:'+last_name+';'+first_name+'\n'+
                            'FN:'+first_name+' '+last_name;
    },
    build_address: function(){
        var home_street = 'Skälbyvägen 9',
            home_city = 'Sollentuna',
            home_region = 'Stockholm',
            home_post = '19149',
            home_country = 'Sweden',
            org_street = '',
            org_city = '',
            org_region = '',
            org_post = '',
            org_country = '';
        
        vcard.str_vcard += '\nADR;TYPE=home:;;'+home_street+';'+home_city+';'+home_region+
                            ';'+home_post+';'+home_country+
                            '\nADR;TYPE=work:;;'+org_street+';'+org_city+';'+org_region+
                            ';'+org_post+';'+org_country;
      },      
    save: function(){
        vcard.build_name();
        
        vcard.build_address();
        
        vcard.str_vcard += vcard.str_end;

    }
}

function submitBtn(){
   vcard.save();
};

const btn = document.getElementById('btn-add');
btn.addEventListener('click', submitBtn);