
#include <stdio.h>

void opc1(){
    printf("\t\tReglamento POO\n");
    printf("1. Se requiere el 80% de asistencia para tener derecho a evaluacion parcial y 80% de trabajos en clase.\n");
    printf("2. Se permiten 10 minutos de tolerancia y si el alumno llega despues de este tiempo puede permanecer en la clase, pero no se tomara la asistencia(Solamente en los horarios de inicio 7:00 a.m. y 14:00 p.m.).\n");
    printf("3. Las faltas deveran estar jutificadas mediante el correo institucional con un plazo maximo a 24 horas posteriores a la hora de falta en clase mediante correo del tutor(a).\n");
    printf("justificantes entregados fuera de la fecha limite permitida no seran aceptadas,unicamente se aceptaran recetas medicas y citatorios juridicos. \n");
	printf("(De forma fisica deben er presentados al tutor para ser validos y de forma posterior emitidos).\n");
	printf("4. Las tareas y trabajos deberan ser subidos al classroom de forma individual y no se recibiran de forma extemporanea.(Salvo previo justificante valido por el tutor)\n");
	printf("5. Las tareas y trabajos presentarlos en tiempo y forma. la demora de un trabajo o tarea sin justificante y/o cono justificante fuera del limite no se aceptan.\n");
	printf("6. utilizar el correo institucional para trabajar bajo la plataforma Google Clasroom.\n");
	printf("7. El plagio o copia de trabajos y/o examen sera condicionado a reprobar la asignatura y se reportara al area correspondiente.\n");
	printf("8. cualquier deshonestidad academicasera sancionada reprobandi el parcial si derecho a examen final.\n");
	printf("9. en circunstancia de indiciplina o falta de respeto por parte del alumno al docente, personal administrativo, compa;eros o cualquier persona perteneciente a la universidad, se realizara una primera llamada de atenion, si el alumno hace caso omiso tendra que abandonar el aula, tres incidentes de este tipo, el alumno no tendra derecho a examen final.\n");
	printf("10. el uso de laptops y/o dispositivos moviles quedara limitado a uso exclusivo a las actividades que asi lo requieran.\n");
	printf("11. Prohibido el uso de audifonos durante la clase.\n");
	printf("12. prohibido comer y/o tomar liquidos en el salon.\n"):
	printf("13. Prohibido sentarse en las mesas y/o columpiarse en las sillas.\n");
	printf("14. todo tema academico debe ser revisado primetramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser nesesario con la coordinacion de tutores. en caso de no solucionarse pasar a la direccion del programa educativo (debe mantenerse este seguimiento de forma obligatoria).\n");
	printf("15. Cualquier situacion no prevista en el presente reglamento pasar directamente con la direccion del programa educativo.\n");
	printf("16. El dia destinado a la entrega de calificaciones todos los estudiantes deben estar presentes, ese dia se entregaran examenes y se brindara retroalimentacio.\n");
	printf("17. este reglamento entra en vigor despues de que se firme o se acepte por la mayoria de los estudiantes sistentes a la primera sesion de la materia, una vez firmado o aceptado por el 50% mas el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no este presente en la primera sesion.\n");
	printf("\n\n\n\n\n\n");
}
void opc2(){
    printf("\t\tLineamientos de Classroom\n");
    printf("								1p");
    printf("Evideoncia de conocimiento	\t40 %		40 %		20 % ");
    printf("Evidencia de desempeno		\t20 %		20 %		10 %");
    printf("Evidencia de producto		\t30 %		20 %		40 %");
    printf("proyecto integrador			\t10 %		20 %		30 %");
    printf("\n\n\n\n");
    
}

void opc3(){
    printf("\t\tFechas de Parciales\n");
    printf("1er parcial		30-09-25");
    printf("2do parcial		04-10-25");
    printf("3er parcial		02-12-25");
    printf("finales			08-12-25");
    printf("\n\n\n\n");
}
void opc4(){
    printf("\t\tPorcenajes por Parcial\n");
    printf("entregar los trabajos en tiempo y forma");
    printf("entregar los reportes en PDF");
    printf("retrazos autorizados, se califican con 5 como maximo ");
    printf("\n\n\n");
}

int main(){
    int opc;
    do{
    printf("Bienvenido\n");
    printf("Que archivo deseas revisar\n");
    printf("1.- Reglamento POO\n");
    printf("2.- Lineamientos de classroom\n");
    printf("3.- Fechas de Parciales\n");
    printf("4.- Porcentajes por parcial\n");
    printf("0.- Finalizar\n");
    scanf("%d", &opc);
    switch(opc){
        case 1:
            opc1();
            break;
        case 2:
            opc2();
        break;
        case 3:
            opc3();
        break;
        case 4:
            opc4();
        break;
        case 0:
        break;
        default:
            printf("opcion no valida, intentalo de nuevo.");
        break;
        
    }
    }while(opc!=0);

    return 0;
}
