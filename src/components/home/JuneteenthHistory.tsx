import Image from 'next/image';
import { FC } from 'react';
import { montserrat } from '@/app/fonts';

const JuneteenthHistory: FC = () => {
  return (
    <section className={`bg-white py-16 px-4 sm:px-6 lg:px-8 font-light ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">The History of Juneteenth</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Though a major step toward the abolition of slavery, Lincoln&apos;s Emancipation Proclamation of 1863 was
              directly aimed at the Secession States. It did not address slavery in Kentucky, Missouri, Maryland, and
              Delaware, known as the Border States. These states were allowed to maintain slavery because they remained
              loyal to the Union.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              African American leaders took great exception to this flaw and openly voiced their concerns. Black men of
              Pennsylvania joined a delegation that met with Mr. Lincoln in the spring of 1862 to express their
              concerns. Later, in September 1862, the &quot;Loyal Governors of the Union&quot; convened a secret meeting at the
              Logan Hotel in Altoona to pledge their support for the pending proclamation. Only Maryland voted against
              the Emancipation Proclamation.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              While the document was imperfect, it did provide for the development of African American military units in
              the United States army.
            </p>
          </div>
          <div className="relative h-64 lg:h-96">
            <Image
              src="/images/istockphoto-1469053293-1024x1024.jpg"
              alt="Emancipation Proclamation"
              fill
              className="object-cover object-center"
            />
          </div>

        <div className="relative h-64 lg:h-96">
          <Image
            src="/images/istockphoto-1324054346-1024x1024.jpg"
            alt="African American Soldiers"
            fill
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="text-lg text-gray-700 mb-4">
            Pennsylvania was amongst the first states in the nation to arm men of color! Leading African Americans took
            up the task of recruiting men of color for the Union army. This roster of recruiters includes the list of
            powerful and dedicated superintendents and conductors of Pennsylvania&apos;s Underground Railroad: Willian Stills
            and Octavio Catto in Philadelphia, William Goodrich in York, Stephen Smith in Lancaster, Henry Watson in
            Chambersburg, Thomas Chester in Harrisburg, John Nesbit in Altoona, John Smith in Johnston, and John Peck,
            Henry Highland Garnett, and Martin Delaney in Pittsburgh. Each was also a founding member of the post-civil
            war Pennsylvania Equal Rights League which actively conducted voter registration.
          </p>
        </div>

    

        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <div>
            <blockquote className="text-2xl font-bold text-gray-900 mb-4">
            &quot;Every people must be the architects of their own destiny.&quot;
            </blockquote>
            <p className="text-lg text-gray-700">- Martin Delaney</p>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-700 mb-4">
            Amidst the conflagrations of the Civil War, Abraham Lincoln sent the 13th amendment forward to congress on
            Feb 1, 1865. Neither the Confederate nor the Union soldiers in the field were aware of the compromises in
            Washington, D.C. Therefore, the intensity of the battle raged on. Months after Robert E. Lee&apos;s surrendered
            in April 1865 at Appomattox, months after Lincoln&apos;s assassination and the nation&apos;s mourning along the rails
            of his funeral train, armed conflicts and deaths continued.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            On June 19, 1865 Union General Gordon Granger arrived in Galveston, Texas declaring a cease fire, and
            announced the war&apos;s end. By then, 180,000 free and freed men of color had served in the United States
            Colored Troops (USCT). Almost 20,000 more had served in the Navy. In addition, thousands of enslaved
            contraband had taken up arms to serve the Union cause and assure their freedom.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            June 19th, or Juneteenth, became known as Freedom Day. Pittsburgh&apos;s historic 1870 Freedom Day marked the
            passage of the 15th Amendment with splendid commemorations, parades, compelling oratory, music,
            re-enactments, street fairs, and family reunions.
          </p>
        </div>
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="/images/Screenshot_20230312-201046-142.png"
            alt="Juneteenth Celebration"
            fill
            className="object-cover object-center"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default JuneteenthHistory;