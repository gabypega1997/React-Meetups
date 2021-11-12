    import Head from 'next/dist/next-server/lib/head';
    import { Fragment } from 'react';
    //our-domain.com/new-meetup
    import { useRouter } from 'next/router';
    import NewMeetupForm from '../../components/meetups/NewMeetupForm';

    function NewMeetupPage() {
      const router =   useRouter();


        async function addMeetupHandler(enteredMeetupData){
            const response = await fetch('../api/new-meetup' , {
                method:"POST",
                body:JSON.stringify(enteredMeetupData),
                headers:{
                    "Content-Type" : 'application/json'
                }
            });
            const data = await response.json();

            console.log(data);
            
            router.push("/")
        }
        return(
            <Fragment>
                <Head>
                    <title>React Meetups Add</title>
                    <meta
                    name= "description"
                    content = "Add your own meetups and create amazing new meetups"
                    >
                     </meta>
                </Head>
                <NewMeetupForm onAddMeetup = {addMeetupHandler}></NewMeetupForm>
            </Fragment>
        )
    }

    export default NewMeetupPage;