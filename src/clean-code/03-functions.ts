(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastByIdMovie( idMovie: string ) {
        console.log({ idMovie });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película

    interface Movie {
        title:       string;
        description: string;
        rating:      number;
        cast:        string;
    }

    function newMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function checkFullName( fullName: string){
        console.log({ fullName });
        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;     
    }

    //Continuación
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result: number;
        
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        return result;
    }

    //modificado
    const getPayAmountV2 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        //let result: number;
        
        if ( isDead )
            return 1500;
        
        if ( isSeparated )
            return 2500;
        
        return (isRetired) ? 3000 : 4000;
    }

    //más modificado
    const getPayAmountV3 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        return (isRetired) ? 3000 : 4000;
    }

})();