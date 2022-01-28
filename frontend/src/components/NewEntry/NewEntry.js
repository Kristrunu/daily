import Button from "../Button/Button";
import "./NewEntry.css";


const NewEntry = () => {
  return(
    <form className="new-entry">

        <div className="entry-date">
            <h2>Today</h2> <Button btnClass="btn-icon icon-edit-icon"/>
        </div>
<div className="all-input">
        <div className="morning">
        <svg className="sun-svg" width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.35 10.6895C20.2565 10.4362 20.2613 10.1562 20.3634 9.90639C20.4655 9.65653 20.6574 9.45542 20.9 9.34381C21.1459 9.25002 21.4179 9.25568 21.6598 9.35962C21.9017 9.46356 22.095 9.65786 22.2 9.9024L24.125 14.5997C24.1863 14.7537 24.2095 14.9206 24.1926 15.0859C24.1756 15.2511 24.119 15.4096 24.0277 15.5474C23.9364 15.6853 23.8132 15.7983 23.6689 15.8765C23.5246 15.9547 23.3636 15.9958 23.2 15.9962C23.0004 15.9993 22.8046 15.9401 22.6392 15.8265C22.4738 15.713 22.3466 15.5506 22.275 15.3614L20.35 10.6895ZM5.75 26.6094L10.375 28.5645C10.494 28.6142 10.6213 28.64 10.75 28.6407C10.9496 28.6438 11.1454 28.5846 11.3108 28.4711C11.4762 28.3575 11.6034 28.1952 11.675 28.0059C11.7739 27.7567 11.7716 27.4778 11.6685 27.2304C11.5654 26.9829 11.37 26.787 11.125 26.6856L6.525 24.7305C6.27558 24.6356 5.99994 24.6404 5.75392 24.7442C5.50791 24.8479 5.3099 25.0427 5.2 25.2891C5.10106 25.5383 5.10339 25.8172 5.20647 26.0647C5.30956 26.3121 5.505 26.508 5.75 26.6094ZM53.25 28.6407C53.3787 28.64 53.506 28.6142 53.625 28.5645L58.25 26.6094C58.495 26.508 58.6904 26.3121 58.7935 26.0647C58.8966 25.8172 58.8989 25.5383 58.8 25.2891C58.6901 25.0427 58.4921 24.8479 58.2461 24.7442C58.0001 24.6404 57.7244 24.6356 57.475 24.7305L52.875 26.6856C52.63 26.787 52.4346 26.9829 52.3315 27.2304C52.2284 27.4778 52.2261 27.7567 52.325 28.0059C52.3966 28.1952 52.5238 28.3575 52.6892 28.4711C52.8546 28.5846 53.0504 28.6438 53.25 28.6407ZM40.425 15.92C40.544 15.9696 40.6713 15.9955 40.8 15.9962C40.9996 15.9993 41.1954 15.9401 41.3608 15.8265C41.5262 15.713 41.6534 15.5506 41.725 15.3614L43.65 10.6895C43.7435 10.4362 43.7387 10.1562 43.6366 9.90639C43.5345 9.65653 43.3426 9.45542 43.1 9.34381C42.8541 9.25002 42.5821 9.25568 42.3402 9.35962C42.0983 9.46356 41.905 9.65786 41.8 9.9024L39.875 14.5997C39.7761 14.8489 39.7784 15.1277 39.8815 15.3752C39.9846 15.6227 40.18 15.8186 40.425 15.92ZM61 40.6251C61 40.8944 60.8946 41.1527 60.7071 41.3432C60.5196 41.5337 60.2652 41.6407 60 41.6407H4C3.73478 41.6407 3.48043 41.5337 3.29289 41.3432C3.10536 41.1527 3 40.8944 3 40.6251C3 40.3557 3.10536 40.0974 3.29289 39.9069C3.48043 39.7164 3.73478 39.6094 4 39.6094H16.275C16.0956 38.6039 16.0036 37.5844 16 36.5626C16 32.2528 17.6857 28.1195 20.6863 25.0721C23.6869 22.0246 27.7565 20.3126 32 20.3126C36.2435 20.3126 40.3131 22.0246 43.3137 25.0721C46.3143 28.1195 48 32.2528 48 36.5626C47.9964 37.5844 47.9044 38.6039 47.725 39.6094H60C60.2652 39.6094 60.5196 39.7164 60.7071 39.9069C60.8946 40.0974 61 40.3557 61 40.6251ZM18.325 39.6094H45.675C45.8968 38.6096 46.0058 37.5874 46 36.5626C46 32.7915 44.525 29.1749 41.8995 26.5084C39.274 23.8419 35.713 22.3438 32 22.3438C28.287 22.3438 24.726 23.8419 22.1005 26.5084C19.475 29.1749 18 32.7915 18 36.5626C17.9942 37.5874 18.1032 38.6096 18.325 39.6094ZM52 49.7657H12C11.7348 49.7657 11.4804 49.8727 11.2929 50.0631C11.1054 50.2536 11 50.5119 11 50.7813C11 51.0507 11.1054 51.309 11.2929 51.4995C11.4804 51.6899 11.7348 51.7969 12 51.7969H52C52.2652 51.7969 52.5196 51.6899 52.7071 51.4995C52.8946 51.309 53 51.0507 53 50.7813C53 50.5119 52.8946 50.2536 52.7071 50.0631C52.5196 49.8727 52.2652 49.7657 52 49.7657Z" fill="#FFF8F2"/>
</svg>
            <div className="affirmations">
                <label className="entry-label" htmlFor="text"> Affirmations For The Day </label>
                <input className="entry-input" type="text" name="affirmations" id="affirmations"/>
            </div>
            <div className="focus">
                <label className="entry-label" htmlFor="text"> Today I Will Focus On.. </label>
                <input className="entry-input" type="text" name="focus" id="focus"/>
            </div>
        </div>

        <div className="evening">
        <svg  className="moon-svg" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.699 14.0248C46.0966 11.899 41.8783 10.6914 37.3788 10.7283C33.7208 10.76 30.1196 11.6296 26.8568 13.2692C23.594 14.9088 20.7582 17.2738 18.5709 20.1795C16.3837 23.0851 14.9043 26.4525 14.2486 30.0185C13.5928 33.5844 13.7784 37.2521 14.7909 40.7349C15.8034 44.2177 17.6152 47.4212 20.0848 50.0948C22.5544 52.7683 25.6148 54.8396 29.0267 56.1465C32.4386 57.4535 36.1095 57.9607 39.7523 57.6286C43.3951 57.2965 46.9112 56.134 50.0255 54.232C44.859 53.9567 39.9931 51.7399 36.4194 48.0334C32.8456 44.3269 30.8328 39.4096 30.7912 34.2833C30.7496 29.157 32.6822 24.2076 36.1953 20.4435C39.7084 16.6795 44.5377 14.384 49.699 14.0248Z" fill="#FFF8F2"/>
</svg>
            <div className="journal-input">
                <label className="entry-label" htmlFor="text"> Journal Entry </label>
                <input className="entry-input" type="text" name="journal-input" id="journal-input"/>
            </div>
            <div className="mood">
                <label className="entry-label" htmlFor="text"> My Mood </label>
                    <div className="mood-picker">
                    <Button btnClass="btn-icon icon-happiest-emoji"/>
                    <Button btnClass="btn-icon icon-happy-emoji"/>
                    <Button btnClass="btn-icon icon-sad-emoji"/>
                    <Button btnClass="btn-icon icon-saddest-emoji"/>
                    </div>
            </div>
            <a className="add-img" href="#">Add Images From The Day</a>
            <div className="c-s-buttons">
                    <Button btnClass="btn-dark cancel" text="Cancel"/>
                    <Button btnClass="btn-light save" text="Save Entry"/>
            </div>
        </div>
</div>
    </form>
  )
};

export default NewEntry;
